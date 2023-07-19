# Tangerine UI for Mastodon 🍊🐘

A Tangerine redesign for Mastodon's Web UI, using just CSS.

* Live demo at [nileane.fr](https://nileane.fr)
* [See the announcement post](https://nileane.fr/@nileane/110691663040709608) on Mastodon

## Variants

### Tangerine 🍊
Default variant for Tangerine UI, featuring a soft orange palette.

![a profile page on Mastodon featuring Tangerine UI in light mode](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/77f49e2a-74c7-4d94-a427-c991289f2383)
![a profile page on Mastodon featuring Tangerine UI in dark mode](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/6891bfde-c5a2-43a6-8357-76c5f8b0f8d3)
![TangerineUI Mobile](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/b10f3e72-0a58-4b0d-8f00-f7210958483c)


### Purple 🪻
For those of you who like Tangerine UI but want to stick to Mastodon's purple palette.

![a profile page on Mastodon featuring Tangerine UI's purple variant in light mode](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/f3ab51d2-c94d-4192-a1c8-6d15b0d9025a)
![a profile page on Mastodon featuring Tangerine UI's purple variant in dark mode](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/2322a5ea-6fce-4acc-9e53-92a9bae72e89)
![TangerineUI Mobile in purple](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/f2098d06-7c48-4282-b5f6-a62c38155c7b)


## How to use
**Tangerine UI is contained in a single CSS file.**  

* To use on your instance, copy & paste the contents of [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI.css) to the **Custom CSS** field in the administration panel on your Mastodon instance (Navigate to https://*domain*/admin/settings/appearance).
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-purple.css) instead.
   * ⚠️ Caution: Using the 'Custom CSS' field to apply Tangerine UI will prevent all users on your instance from being able to choose another theme in their settings. Please make sure there is a consensus among your users for doing so.

* If you're not an admin, you can use Tangerine UI with a browser extension (ie. [Stylus](https://add0n.com/stylus.html)).

* [To be added: instructions on how to install Tangerine UI as an optional theme for your users on your instance]

## Things to know
* **Tangerine UI currently only supports Mastodon's single column layout**. The advanced view (multiple columns) will not be affected.
* **Tangerine UI auto-switches from light to dark mode based on your OS preference**, whether you set your Mastodon theme to *Mastodon (Dark)* or *Mastodon (Light*).
* Check your Mastodon instance version before using. The latest Mastodon release checked to be compatible is indicated in the CSS file header.
* Glitch-soc and Hometown instance admins beware: Tangerine UI is currently only meant to be applied to Mastodon's vanilla Dark and Light themes.
    * If you are a user on a Glitch-soc or Hometown instance using a browser extension, first switch your instance to the Mastodon flavour before applying Tangerine UI.

## Accessibility
* I have not yet adapted Tangerine to Mastodon's *High Contrast* theme setting. Please consider that some of your users may depend on it.

## Credits
Huge thanks to [Roni Laukkarinen](https://mementomori.social/@rolle) whose work on [Mastodon Bird UI](https://github.com/ronilaukkarinen/mastodon-bird-ui) I adapted for multiple parts of the redesign. The icon replacement implementations I have also adapted from Bird UI.

## <3
If you enjoy Tangerine UI, jobless me would really appreciate a [tip 💛](https://ko-fi.com/nileane)!
