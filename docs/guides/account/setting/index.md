---
sidebar_position: 1
---

# Account Settings

This section describes the **Account Settings** feature.

Click ```Settings``` in the user menu.

![User menu](../img/userMenu.png)

## Overview

![Account settings tabs](./img/tabs.png)

1. General: Change user information such as avatar, display name...
2. Security: Change password.
3. Setting: Other account settings.

## General tab

![General tab](./img/generalTab.png)

## Security tab

![Security tab](./img/securityTab.png)

## Setting tab

![Setting tab](./img/settingTab.png)

Currently there is only 1 configuration at this tab, which is *"Use Soundex Search when searching for concepts"*.

>**Soundex** is a phonetic algorithm for indexing names by sound, as pronounced in English. The goal is for homophones to be encoded to the same representation so that they can be matched despite minor differences in spelling. ([Wikipedia](https://en.wikipedia.org/wiki/Soundex))

Soundex search is an **advanced search configuration**, which helps you to search for concepts even if you don't remember the concept clearly and enter a few characters wrong in the search box.

Here is an example of this feature. Suppose in your dictionary there is a concept of *"Buddhism"*, but when you search you remember wrongly and type *"Budhism"*.

If you uncheck the ```Use Soundex Search...``` checkbox, you will not find any concept that matches the search keyword *"Budhism"*.

![Before use soundex](./img/beforeUseSoundex.png)

When you check the ```Use Soundex Search...``` checkbox and search again, you will see the concept of *"Buddhism"* in the search results.

![After use soundex](./img/afterUseSonudex.png)

Soundex search is **not good for all cases**. You will probably get irrelevant search results. Here is an example when you search for *"bye"* while your dictionary doesn't have *"bye"*, but has *"boy"*.

![Problem when use soundex](./img/problemUseSoundex.png)


