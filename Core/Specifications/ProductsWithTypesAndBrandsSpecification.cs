using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams prodcutParams) 
            : base(x =>
            // we are checking if we have a value for brandId
            // if brandId does not have a value then we use or expression then we get a query to get 
            // && and also
            // if we have a typeId then this is going to be false and that means we execute whats on the right hand side of the execution ||
            (string.IsNullOrEmpty(prodcutParams.Search) || x.Name.ToLower().Contains(prodcutParams.Search)) &&
            (!prodcutParams.BrandId.HasValue || x.ProductBrandId == prodcutParams.BrandId) &&
            (!prodcutParams.TypeId.HasValue || x.ProductTypeId == prodcutParams.TypeId)
        )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderBy(x => x.Name);
            // pagination
            ApplyPaging(prodcutParams.PageSize * (prodcutParams.PageIndex - 1), prodcutParams.PageSize);

            if (!string.IsNullOrEmpty(prodcutParams.Sort))
            {
                switch(prodcutParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x => x.Id == id) //x => x.Id == id  will be replaced by  Expression<Func<T, bool>> criteria
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
