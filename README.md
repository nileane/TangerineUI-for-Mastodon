# Tangerine UI for Mastodon 🍊🐘

*README still a WIP*

Tangerine UI is a UI redesign I made for Mastodon's Web interface, using only pure CSS.

Make your Mastodon Web interface a friendlier place. Tangerine features a soft orange palette, a bubblier look, and a more compact timeline that should be easier on your eyes. Also, Tangerine UI supports both dark and light modes.

## Live demo at [nileane.fr](https://nileane.fr)

## How to use
**Tangerine UI is contained in a single CSS file.**  

To use on your instance, simply copy & paste the contents of [TangerineUI-single-colum.css](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-single-column.css) to the **Custom CSS** field in the administration panel on your Mastodon instance (Navigate to https://*domain*/admin/settings/appearance).

If you're not an admin, you can still use Tangerine UI using a userstyle browser extension (ie. Stylish).

### Things to know
* This is still pretty early, and this is a personal project, so things might not be styled properly in some places. [Feel free to message me](https://nileane.fr/@nileane) if you notice anything wonky though :)
* **Tangerine UI currently only supports Mastodon's single column layout**. The advanced view (multiple columns) will not be affected.
* **Tangerine UI auto-switches from light to dark mode based on your OS preference**, whether you set your Mastodon theme to *Mastodon (Dark)* or *Mastodon (Light*).
* Check your Mastodon instance version before using. The latest Mastodon release checked to be compatible is indicated in the CSS file header.
* Glitch-soc and Hometown instance admins beware: Tangerine UI is currently only meant to be applied to Mastodon's vanilla Dark and Light themes.
* I have not yet adapted Tangerine to Mastodon's *High Contrast* theme setting. Please consider this if one or multiple of your users depend on it.

## Credits
Huge thanks to [Roni Laukkarinen](https://mementomori.social/@rolle) whose work on [Mastodon Bird UI](https://github.com/ronilaukkarinen/mastodon-bird-ui) I adapted for multiple parts of the redesign. The icon replacement implementations I have also adapted from Bird UI.