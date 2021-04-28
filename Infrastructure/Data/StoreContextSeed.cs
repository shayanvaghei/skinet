using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            // since we are running this method inside our program class then we don't have access to global exception handling
            // try catch so we have
            // explicityly use try catch block
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                // if there are no ProductBrands in our database then we trigger this seeding
                if (!context.ProductBrands.Any())
                {
                    var brandsData = File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    // we want to serilize in our json
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
                    foreach(var item in brands)
                    {
                        context.ProductBrands.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.ProductTypes.Any())
                {
                    var typesData = File.ReadAllText(path + @"/Data/SeedData/types.json");

                    // we want to serilize in our json
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
                    foreach (var item in types)
                    {
                        context.ProductTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText(path + @"/Data/SeedData/products.json");

                    // we want to serilize in our json
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.DeliveryMethods.Any())
                {
                    var dmData = File.ReadAllText(path + @"/Data/SeedData/delivery.json");

                    // we want to serilize in our json
                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);
                    foreach (var item in methods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex, "An error occured during migration");
            }
        }
    }
}
