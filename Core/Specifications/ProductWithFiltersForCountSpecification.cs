using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecification(ProductSpecParams prodcutParams)
            : base (x =>
            (string.IsNullOrEmpty(prodcutParams.Search) || x.Name.ToLower().Contains(prodcutParams.Search)) &&
            (!prodcutParams.BrandId.HasValue || x.ProductBrandId == prodcutParams.BrandId) &&
            (!prodcutParams.TypeId.HasValue || x.ProductTypeId == prodcutParams.TypeId)
            )
        {

        }
    }
}
