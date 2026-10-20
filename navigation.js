// Reused from my portfolio: load one shared menu into each page.
// The callback is new: it marks the current page for sighted and screen-reader users.
if (typeof window.jQuery !== "undefined") {
    $("#nav-placeholder").load("navbar.html", function (response, status) {
        if (status === "success") {
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            $('.nav-link[href="' + currentPage + '"]').attr("aria-current", "page");
        }
    });
}
