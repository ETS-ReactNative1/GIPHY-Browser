## Table of Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Flow](#flow)
6. [Dependencies](#dependencies)
7. [References](#references)

## Introduction
A react native application for fetching, listing, and saving GIFs from GIPHY API.
## Installation
```sh
git clone git@github.com:muhammadSharaf/GIPHY-Browser.git
npm install
```
For Android:
```sh
npx react-native run-android
```
For ios:
```sh
npx react-native run-ios
```
## Project Structure
```
GIPHY Explorer (Root Dir)
│   README.md
│   index.js (Application Entry Point)    
│   App.js (Main Component has only navigation logic)
|   
└───store
|   │   actions.js
|   │   configureStore.js (configuration and export)
|   |   constants.js
|   |   reducers.js
|   |   state.js
|
└───src
|   │   
│   │  
│   └───assets 
│   │  
│   └───components
│   │  
│   └───utils (Custome navigator tabs at the top)
│   │  
│   └───screens (Screen
│   │  
│   └───store
│   |    │   
│   |    │───slices
│   |    │   
│   |    │───states
│   |    │   
│   |    │  store.js

```
## Features
- Listing Trending GIFs in GIHPY.
- Listing By GIF Category.
- Search GIFs using keywords.
- Customizable listing grid (2,3, or 4 columns).
- Display GIF and publisher information.
- Download GIF to gallery.


## Flow
The Application home screen contains search bar in which you write keywords to filter out results. Then there is the categories list which filters the results by categoy.
> Note: If a category was selected, the search keywords will be filtering results inside that category.

The Grid displaying GIFs can be customizable using the icon in App bar to show results in a grid containing 2, 3, or 4 columns based on the selection.
When clicking on a GIF a new screen with GIF information and a higher quality version of the GIF will be displayed with the option to save it to the gallery and a back button to return to home screen.

[Watch this demo video](https://i.ibb.co/521c0Cq/20220221-020458.gif)

## Dependencies
1. Axios
2. Redux
3. Vector Icons


## References
This Project Uses GIPHY Free API: https://developers.giphy.com/
