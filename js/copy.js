async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
}

function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-button");
  copyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", async () => {
      const code =
        copyButton.previousElementSibling.querySelector("code").innerText;
      const copied = await copyToClipboard(code);
      if (copied) {
        copyButton.innerText = "Copied!";
        setTimeout(() => {
          copyButton.innerText = "Copy";
        }, 2000);
      } else {
        alert("Failed to copy code.");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", initializeCopyButtons);
