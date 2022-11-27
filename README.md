⚠️ After trying to implement everything, I came to the conclusion that it's not possible to conveniently implement a PDF export of a HTML Page. ⚠️

Therefor this repository will stay as is and could be used as a example of how to implement Nuxt3 with i18n + Icon support. ^w^

# Talon
Character Sheet Creator for Star Wars

✔️ i18n support for multi-language

✔️ Export as PDF

## Preamble

While the character sheets of Bastion Kain are super noice, they lack customizability and are not translatable due to the fact they're saved in the PDF format.

This I wanna change with this smol project, turning the sheet into interactive forms and making translating as easy as possible 😸

It's named after the best Sith for obvious reasons 😈

## Translation

Translation files can be found in the **/lang/** directory!

📖 Translating is pretty straight-forward with key-value pairs in the json format.

🔴 Adding new languages is possible, but requires additional settings as seen in **nuxt.config.ts**!

For local development there's support for the i18n-Ally extension for Visual Studio Code.

## Credits

📚 Character Sheet based on [Bastion Kains Character Sheets](http://bastionkainssweote.blogspot.com/p/character-sheets.html)

📚 [Bootstrap 5 UI](https://www.getbootstrap.com)

📚 [Nuxt 3](https://www.nuxt.com) Framework with [Nuxt i18n](https://i18n.nuxtjs.org/)

📚 Unocss + Iconify for automatic Icon svg imports (as outlined [here](https://github.com/antfu/unplugin-icons/issues/219#issuecomment-1229306043))