import { EmojiButton } from "@joeattardi/emoji-button";

const picker = new EmojiButton({
  style: window.is.windows() ? "twemoji" : "native",
  showPreview: false,
  zIndex: 1,
  autoFocusSearch: false,
});

const emojiButtons = document.querySelectorAll("[data-emoji-button]");

emojiButtons.forEach((button) => {
  button.addEventListener("click", ({ currentTarget }) => {
    picker.togglePicker(currentTarget);
  });
});

window.picker = picker;
