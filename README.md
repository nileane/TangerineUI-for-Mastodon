# Tangerine UI for Mastodon 🍊🐘

Tangerine UI is a redesign of Mastodon's Web interface, using just CSS.

Make your Mastodon Web interface a friendlier place. Tangerine UI features a soft orange palette, a bubblier look, and a more compact timeline that should be easier on your eyes. Also, Tangerine UI supports both dark and light modes.

## Live demo at [nileane.fr](https://nileane.fr)
* [See the announcement post](https://nileane.fr/@nileane/110691663040709608) on Mastodon

## 2 variants

### 🍊 Tangerine
Default variant for Tangerine UI, featuring a soft orange palette.

![Safari - 2023-07-12 à 22 49@2x](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/77f49e2a-74c7-4d94-a427-c991289f2383)
![Code - 2023-07-12 à 22 49@2x](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/6891bfde-c5a2-43a6-8357-76c5f8b0f8d3)

### 🪻 Purple
For those of you who like Tangerine UI but want to stick to Mastodon's purple palette.

![Code - 2023-07-12 à 22 48@2x](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/f3ab51d2-c94d-4192-a1c8-6d15b0d9025a)
![Safari - 2023-07-12 à 22 48@2x](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/2322a5ea-6fce-4acc-9e53-92a9bae72e89)

## How to use
**Tangerine UI is contained in a single CSS file.**  

* To use on your instance, simply copy & paste the contents of [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI.css) to the **Custom CSS** field in the administration panel on your Mastodon instance (Navigate to https://*domain*/admin/settings/appearance).
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI.css) instead.

* If you're not an admin, you can still use Tangerine UI using a userstyle browser extension (ie. [Stylus](https://add0n.com/stylus.html)).

### Things to know
* This is still pretty early, and this is a personal project, so things might not be styled properly in some places. [Feel free to message me](https://nileane.fr/@nileane) if you notice anything wonky though :)
* **Tangerine UI currently only supports Mastodon's single column layout**. The advanced view (multiple columns) will not be affected.
* **Tangerine UI auto-switches from light to dark mode based on your OS preference**, whether you set your Mastodon theme to *Mastodon (Dark)* or *Mastodon (Light*).
* Check your Mastodon instance version before using. The latest Mastodon release checked to be compatible is indicated in the CSS file header.
* Glitch-soc and Hometown instance admins beware: Tangerine UI is currently only meant to be applied to Mastodon's vanilla Dark and Light themes.
    * If you are a user on a Glitch-soc or Hometown instance using a browser extension, first switch your instance to the Mastodon flavour before applying Tangerine UI.
* I have not yet adapted Tangerine to Mastodon's *High Contrast* theme setting. Please consider this if one or multiple of your users depend on it.

## Credits
Huge thanks to [Roni Laukkarinen](https://mementomori.social/@rolle) whose work on [Mastodon Bird UI](https://github.com/ronilaukkarinen/mastodon-bird-ui) I adapted for multiple parts of the redesign. The icon replacement implementations I have also adapted from Bird UI.

## <3
If you enjoy Tangerine UI, jobless me would really appreciate a [tip 💛](https://ko-fi.com/nileane)!
