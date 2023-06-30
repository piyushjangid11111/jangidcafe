using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

var constr = builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source=JangidCafe";

builder.Services.AddSqlServer<jangidcafeapi.Data.AppDbContext>(constr);


// Add services to the container.

builder.Services.AddControllers();
  //.AddNewtonsoftJson(options =>
  // {
  //     options.SerializerSettings.ContractResolver = new DefaultContractResolver();
  // });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
                          policy =>
                          {
                              // policy.WithOrigins("http://localhost:4200/ ")
                              policy.WithOrigins("*")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
