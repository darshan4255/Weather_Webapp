<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Weather App</title>
</head>
<body>
    <div class="header">
        <h1>WEATHER REPORT</h1>
    </div>
    <div class="location">
        <div class="loc-icon">
            <i class="fa fa-map-marker location-icon" style="font-size: 40px;" aria-hidden="true"></i>
            <h1 class="location-timezone"></h1>
        </div>
        <img class="icon-image">
    </div>

    <div class="temperature">
        <div class="degree-section">
            <i class="fa fa-thermometer-empty" style="font-size: 40px; margin-right: 30px;" aria-hidden="true"></i>
            <h2 class="temperature-degree"></h2>
            <span></span>
        </div>
        <div class="temperature-description"></div>
    </div>
    <div class="footer">
        <span>&#169;DARSHAN RAVAL 2021</span>
    </div>
    <script src="app.js"></script>
</body>
</html>
