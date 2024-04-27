export const report_html = `<!DOCTYPE html>
<html>
  <head>
    <!-- <link href="./css/main.css" rel="stylesheet" /> -->
    <title>Police report</title>

    <style>
      .main {
        background-color: white;
        color: black;
      }

      * {
        margin: 0px;
      }

      .header {
        background-color: darkblue;
        height: 200px;
      }

      .logo {
        color: white;
        text-align: center;
        font-size: 50px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      .main_text {
        font-size: 20px;
      }
      .end {
        margin-top: 20px;
        font-size: 20px;
      }
    </style>
  </head>

  <body>
    <div class="main">
      <div class="header">
        <p class="logo">The Nigeria Police</p>
      </div>
      <div>
        <p class="main_text">
        The text report
        </p>
      </div>
      <p class="end">The Commisional of police</p>
    </div>
  </body>
</html>
`;
