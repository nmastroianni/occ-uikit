function loadHeader() {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) {
    return;
  }

  const path = window.location.pathname;
  const pathParts = path.split("/").filter(Boolean);
  const isHomePage = pathParts.length <= 1;

  document.title = isHomePage
    ? "OCC UIkit"
    : `${pathParts[pathParts.length - 2]} - OCC UIkit`;

  const breadcrumbNav = isHomePage
    ? ""
    : `
        <ul class="uk-breadcrumb uk-margin-top">
            <li><a href="${baseUrl}">Home</a></li>
            <li><span>${pathParts[pathParts.length - 2]}</span></li>
        </ul>
      `;

  const header = `
                <a href="#main" class="uk-skip-link">Skip to main content</a>
                <nav class="uk-navbar-container" data-uk-navbar>
                    <div class="uk-container">
                        <div class="uk-navbar-left">
                            <a href="${baseUrl}" class="uk-navbar-item uk-logo">OCC UIkit</a>
                        </div>
                    </div>
                </nav>
                <div class="uk-container">
                    ${breadcrumbNav}
                </div>
            `;
  headerContainer.innerHTML = header;
}

document.addEventListener("DOMContentLoaded", loadHeader);
