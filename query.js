const header = document.querySelector(".article__header")
header.textContent = "Welcome to the Caroline's Blog";

const headers = document.querySelectorAll(".article__header")
headers.forEach(
    (currentNode) => {currentNode.classList.add("important")}
)

const dashedBorder = document.querySelector(".dashed")
dashedBorder.classList.remove("dashed")

const articleFooter = document.querySelector(".article__footer")
articleFooter.classList.add("goldenrod")
