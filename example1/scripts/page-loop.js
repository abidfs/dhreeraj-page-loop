const pages = ['/pages/one', '/pages/two', '/pages/three', '/pages/four', '/pages/five'];

function main() {
  const currentPageIndex = pages.indexOf(window.location.pathname);
  const nextPagePath = pages[(currentPageIndex + 1) % pages.length];
  setTimeout(function () {
    window.location.href = nextPagePath;
  }, 3000);
}

main();
