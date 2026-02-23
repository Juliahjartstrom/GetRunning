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

    string cssUrl = $"{context.Request.Scheme}://{context.Request.Host}/css/style.css";

    // SERVER-SIDE VALIDATION
    if (string.IsNullOrWhiteSpace(name) ||
        string.IsNullOrWhiteSpace(email) ||
        string.IsNullOrWhiteSpace(phone))
    {
        return Results.Content($@"
<!DOCTYPE html>
<html lang='sv'>
<head>
    <meta charset='UTF-8'>
    <title>Fel i formulär</title>
    <link rel='stylesheet' href='{cssUrl}'>
</head>
<body>

<main class='booking-page'>
    <section class='booking-card'>
        <h2>Fel: Obligatoriska fält saknas</h2>
        <p>Namn, e-post och telefonnummer måste fyllas i.</p>
        <a href='/Provpass.html' class='btn-primary'>Gå tillbaka</a>
    </section>
</main>

</body>
</html>
", "text/html; charset=utf-8");
    }

    // SUCCESS RESPONSE
    return Results.Content($@"
<!DOCTYPE html>
<html lang='sv'>
<head>
    <meta charset='UTF-8'>
    <title>Tack för din bokning</title>
    <link rel='stylesheet' href='{cssUrl}'>
</head>
<body>

<main class='booking-page'>
    <section class='booking-card'>
        <h2>Tack {System.Net.WebUtility.HtmlEncode(name)}!</h2>
        <p>Din bokning har skickats.</p>
        <p>Vi kontaktar dig inom 24 timmar.</p>

        <hr>

        <p><strong>E-post:</strong> {System.Net.WebUtility.HtmlEncode(email)}</p>
        <p><strong>Telefon:</strong> {System.Net.WebUtility.HtmlEncode(phone)}</p>

        <a href='/Startsida.html' class='btn-primary'>Till startsidan</a>
    </section>
</main>

</body>
</html>
", "text/html; charset=utf-8");
});

app.Run();