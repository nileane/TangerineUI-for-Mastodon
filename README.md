<h1>
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="./art/Logo_Wide_Dark.png?raw=true">
  <source media="(prefers-color-scheme: light)" srcset="./art/Logo_Wide.png?raw=true">
  <img alt="Tangerine UI for Mastodon" src="./art/Logo_Wide.png?raw=true" height="110">
 </picture>
</h1>


## A Tangerine redesign for Mastodon's Web UI.  
Tangerine UI features a bubblier look, a more compact timeline, round avatars, and a soft color palette that automatically switches between light and dark modes.

[🕹️ **Live demo** @ nileane.fr](https://nileane.fr) • [👋 **Follow Tangerine UI** on Mastodon](https://nileane.fr/@TangerineUI) • [📝 **Changelog**](https://github.com/nileane/TangerineUI-for-Mastodon/releases)

## Table of contents

* [**Variants**](#variants)
* [**Features**](#features)
* [**List of instances that use Tangerine UI**](#list-of-instances-that-use-tangerine-ui)
* [**Installation**](#installation-for-mastodon-admins)
  * [Install on a **Mastodon** instance](#installation-for-mastodon-admins)
  * [Install on a **Glitch-soc** instance](#installation-for-glitch-soc-admins)
  * [Install as a regular user](#installation-for-regular-users)
* [**Compatibility**](#compatibility)
* [**Accessibility**](#accessibility)
* [**Credits**](#credits)
* [**Support me**](#support-me-3)
  

## Variants

* **🍊 Tangerine**  
  Default variant for Tangerine UI, featuring a soft orange palette.

  <img width="1684" alt="TangerineUI-tangerine" src="https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/5eba6ead-5634-4ce8-aaf4-ccec7f11a690">

* **🪻 Purple**  
  For those of you who like Tangerine UI but want to stick to Mastodon's purple.

<img width="1684" alt="TangerineUI-purple" src="https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/8445c052-7081-4f00-b46e-5d003e4209a2">

* **🍒 Cherry**  
 I won't be held responsible if you end up licking your screen with this one.
  
<img width="1684" alt="TangerineUI-cherry" src="https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/33da47d7-d357-43ff-b2c1-6c15bc3f0ecb">


## Features

* 🧑‍🔬 **Support for the advanced web interface**  
  All variants of Tangerine UI support Mastodon's multi-column layout.
  
<img width="1840" alt="TangerineUI-multicolumn" src="https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/bfa74219-bfef-46ec-9742-78165593e2a6">


* 🚀 **Thoughtful animations**  
  The rocket flies!
  
<img width="600" src="https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/31d41d04-6ef1-4ef0-80c3-b4b445ee98a1">


* 🌚 **Dark mode**  
  Tangerine UI automatically switches from light to dark mode based on your system or browser preference.
  
* ⏺️ **Phosphor icons**  
  Tangerine UI uses a selection of icons from the beautiful [Phosphor](https://phosphoricons.com) icon family

* 🔍 **Zoom on emojis**  
  Custom emojis are great, but they may be difficult to distinguish when they are overly detailed. Tangerine UI allows you to hover and pause over an emoji to enlarge it.

* ✨ **and more**


## List of instances that use Tangerine UI
These are known instances that have enabled Tangerine UI for their users, either as the only theme, or as an optional theme.

If you're an admin and have installed Tangerine UI on your instance, **feel free to add yours here** (open a PR, or just [DM me](https://nileane.fr/@nileane))

| **Instance**                                             | **User count** | **Installed as...** | **Default theme?**      |
| -------------------------------------------------------- | -------------- | ------------------- | ----------------------- |
| [piaille.fr](https://piaille.fr)                         | 10K+           | an optional theme   | No                      |
| [norden.social](https://norden.social)                   | 5K+            | an optional theme   | No                      |
| [vmst.io](https://vmst.io)                               | 2K+            | an optional theme   | No                      |
| [eldritch.cafe](https://eldritch.cafe)                   | 1.5K+          | an optional theme   | No                      |
| [octodon.social](https://octodon.social)                 | 1K+            | an optional theme   | No                      |
| [social.lol](https://social.lol)                         | 750+           | an optional theme   | No                      |
| [shelter.moe](https://shelter.moe)                       | 350+           | an optional theme   | No                      |
| [pipou.academy](https://pipou.academy)                   | 100+           | an optional theme   | No                      |
| [indiepocalypse.social](https://indiepocalypse.social)   | 100+           | an optional theme   | No                      |
| [bolha.one](https://bolha.one)                           | 20+            | an optional theme   | Yes (Tangerine variant) |
| [i1.no](https://i1.no)                                   | 15+            | the only theme      | Yes (Purple variant)    |
| [zeppelin.flights](https://zeppelin.flights)             | 15+            | the only theme      | Yes (Tangerine variant) |
| [catharsis.cafe](https://catharsis.cafe)                 | 10+            | an optional theme   | Yes (Tangerine variant) |
| [nileane.fr](https://nileane.fr)                         | 5+             | the only theme      | Yes (Tangerine variant) |
| [social.nah.re](https://social.nah.re)                   | 5+             | an optional theme   | No                      |
| [esoteric.party](https://esoteric.party)                 | 5+             | the only theme      | Yes (Tangerine variant) |
| [asso.lgbt](https://asso.lgbt)                           | 5+             | the only theme      | Yes (Purple variant)    |
| [Buddyverse.xyz](https://buddyverse.xyz)                 | 5+             | an optional theme   | No                      |
| [isfeeling.social](https://isfeeling.social)             | 1+             | the only theme      | Yes (Purple variant)    |
| [ucn.social](https://ucn.social)                         | 1+             | an optional theme   | Yes (Tangerine variant) |
| [fedi.cyberwitches.club](https://fedi.cyberwitches.club) | 1+             | the only theme      | Yes (Purple variant)    |
| [toulouse.social](https://toulouse.social)               | 1+             | the only theme      | Yes (Tangerine variant) |
| [mastodon.projetretro.io](mastodon.projetretro.io)       | 1+             | an optional theme   | No                      |
| [mstdn.0xdj.dev](https://mstdn.0xdj.dev)                 | 1              | the only theme      | Yes (Tangerine variant) |


## Installation for Mastodon admins

### Install Tangerine UI as the only theme on your instance:
* Copy & paste the contents of [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI.css) to the **Custom CSS** field in the administration panel on your Mastodon instance (Navigate to https://*domain*/admin/settings/appearance).
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-purple.css) instead.
   * 🍒 For the cherry variant, copy the contents of [`TangerineUI-cherry.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-cherry.css) instead.

⚠️ **Caution: Using the 'Custom CSS' field to apply Tangerine UI will prevent all users on your instance from being able to choose another theme in their Appearance settings** ([see *Accessibility*](#accessibility)). Please make sure there is a consensus among your users for doing so. If not, see below how to install Tangerine UI as an optional theme for your users.

### Install Tangerine UI as an optional theme on your instance [Recommended]:
Follow these instructions if you wish to add Tangerine UI as an available theme for your users on your instance.  
This will also allow you to set Tangerine UI as the default theme for your instance, while still letting your users change back to any of Mastodon's default themes in their Appearance settings.

1. **Copy the files** from `mastodon/app/javascript/styles/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/main/mastodon/app/javascript/styles/) to your Mastodon themes directory `app/javascript/styles/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Mastodon installation.
cp -r $REPO/mastodon/app/javascript/styles/* $INSTALLDIR/app/javascript/styles
```


2. **Add Tangerine UI to `themes.yml`**. To make Tangerine UI available in your users's settings, you need to add a new line to [`config/themes.yml`](https://github.com/mastodon/mastodon/blob/main/config/themes.yml). Here we're adding 2 new lines, one for Tangerine UI, another for Tangerine UI's purple variant:

```yml
default: styles/application.scss
contrast: styles/contrast.scss
mastodon-light: styles/mastodon-light.scss
tangerineui: styles/tangerineui.scss                  | **new**
tangerineui-purple: styles/tangerineui-purple.scss    | **new**
tangerineui-cherry: styles/tangerineui-cherry.scss    | **new**
```

3. **Add a localized name (optional).** You can edit each desired language's locale file in `config/locales/[lang].yml` to add a localized string name for Tangerine UI. You need to do this for every language you expect your users to use. Otherwise, in their themes list, they will see the unlocalized theme name ("*tangerineui-purple*"), instead of a readable theme name ("*Tangerine UI (Purple)*").

```yml
themes:
  contrast: Mastodon (High contrast)
  default: Mastodon (Dark)
  mastodon-light: Mastodon (Light)
  tangerineui: Tangerine UI                           | **new**
  tangerineui-purple: Tangerine UI (Purple)           | **new**
  tangerineui-cherry: Tangerine UI (Cherry)           | **new**
```

4. **Compile theme assets and restart.** Run `RAILS_ENV=production bundle exec rails assets:precompile` and restart your Mastodon instance for the changes to take effect.

Your users should now be able to choose '*Tangerine UI*' and '*Tangerine UI (Purple)*' as their site theme:

![Screenshot : select Tangerine UI as a theme in appearance settings on Mastodon.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/8cce803c-099b-4f25-8e39-e1c0da3aa6dc)

As an admin, you should also now be able to set Tangerine UI as the default theme for your instance (navigate to https://*domain*/admin/settings/appearance):

![Screenshot : select Tangerine UI as the default theme for your Mastodon instance in the administration panel.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/05fcbb53-54de-40e4-89bd-199107116dfc)

## Installation for Glitch-soc admins

Tangerine UI does not yet support Glitch-soc's features and layout, but it can still be installed as a vanilla skin on your Glitch-soc instance:

1. **Copy the files** from `mastodon/app/javascript/styles/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/main/mastodon/app/javascript/styles/) to your Mastodon themes directory `app/javascript/styles/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Glitch-soc installation.
cp -r $REPO/mastodon/app/javascript/styles/* $INSTALLDIR/app/javascript/styles
```

2. **Copy the files** from `mastodon/app/javascript/skins/vanilla/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/main/mastodon/app/javascript/skins/vanilla/) to your Glitch-soc skins directory `app/javascript/skins/vanilla/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Glitch-soc installation.
cp -r $REPO/mastodon/app/javascript/skins/vanilla/* $INSTALLDIR/app/javascript/skins/vanilla
```

3. **Compile theme assets and restart.** Run `RAILS_ENV=production bundle exec rails assets:precompile` and restart your Glitch-soc instance for the changes to take effect.

Your users should now be able to select Tangerine UI as a theme in their settings, under Flavours → Vanilla Mastodon → Skin

![Glitch-soc settings. Flavours → Vanilla Mastodon → Skin](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/abd931ab-685a-4d55-aa24-cb6356a19a7c)


## Installation for regular users
Even if you are not an admin on your instance, you can still use Tangerine UI with a browser extension:

1. Install any browser extension that allows you to inject CSS on a webpage, such as [Stylus](https://add0n.com/stylus.html), or [Live CSS Editor](https://github.com/webextensions/live-css-editor)
2. Copy & paste the contents of [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI.css) to the extension's editor
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-purple.css) instead.
   * 🍒 For the cherry variant, copy the contents of [`TangerineUI-cherry.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/main/TangerineUI-cherry.css) instead.

⚠️ If you are a user on a Glitch-soc instance, you must switch to the Vanilla Mastodon flavour for Tangerine UI to work properly: in your instance settings, navigate to Flavours → Vanilla Mastodon → select the 'Default' skin.
 
💡 Alternatively, if you wish to use a JavaScript browser extension, [@Write](https://github.com/Write) has written a ready-to-use UserScript to load Tangerine UI on any Mastodon instance. Check out [the TangerineUI-Userscript repository](https://github.com/Write/TangerineUI-Userscript) for instructions.

## Compatibility
* **Tangerine UI v2.x is compatible with instances running Mastodon 4.3 and above.** 
* For instances running Mastodon 4.1.x or 4.2.x, use [**Tangerine UI v1.9.4**](https://github.com/nileane/TangerineUI-for-Mastodon/tree/v1.9.4) instead.
  * ⚠️ The advanced web interface (multi-column layout) is not supported by Tangerine UI v1.9.4
* Tangerine UI is **not** compatible with Mastodon 4.0.x and older.

## Accessibility
Please consider that some of your users may depend on Mastodon's High Contrast theme before [setting Tangerine UI as the only theme](#install-tangerine-ui-as-the-only-theme-on-your-instance) on your instance. For this reason, unless you're running a single-user instance, I recommend [installing Tangerine UI as an optional/revertable theme](#install-tangerine-ui-as-an-optional-theme-on-your-instance-recommended) instead.

## Credits
* The logo for Tangerine UI was designed by [Younis @younishd](https://younishd.fr). 🍊

## Support me <3
If you enjoy Tangerine UI, jobless me would really appreciate a [tip 💛](https://ko-fi.com/nileane)!
