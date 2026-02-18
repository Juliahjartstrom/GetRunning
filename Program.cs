var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapPost("/boka", async (HttpContext context) =>
{
    var form = await context.Request.ReadFormAsync();

    string name = form["name"];
    string email = form["email"];
    string phone = form["phone"];
    string message = form["message"];

    // SERVER-SIDE VALIDATION
    if (string.IsNullOrWhiteSpace(name) ||
        string.IsNullOrWhiteSpace(email) ||
        string.IsNullOrWhiteSpace(phone))
    {
        return Results.Content(@"
            <html>
            <body style='font-family: Arial; padding:40px;'>
                <h2>Fel: Obligatoriska fält saknas</h2>
                <p>Namn, e-post och telefonnummer måste fyllas i.</p>
                <a href='/Provpass.html'>Gå tillbaka</a>
            </body>
            </html>
        ", "text/html");
    }

    // SUCCESS RESPONSE
    return Results.Content($@"
        <html>
        <body style='font-family: Arial; padding:40px;'>
            <h2>Tack {name}!</h2>
            <p>Din bokning har skickats.</p>
            <p>Vi kontaktar dig inom 24 timmar.</p>
            <hr>
            <p><strong>E-post:</strong> {email}</p>
            <p><strong>Telefon:</strong> {phone}</p>
            <a href='/Startsida.html'>Tillbaka till startsidan</a>
        </body>
        </html>
    ", "text/html");
});

app.Run();
