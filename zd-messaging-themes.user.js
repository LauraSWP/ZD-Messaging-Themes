// ==UserScript==
// @name         Zendesk Chat Modern Layout with Night Mode and Custom Theme
// @updateURL    https://github.com/LauraSWP/ZD-Messaging-Themes/raw/main/zd-messaging-themes.user.js
// @downloadURL  https://github.com/LauraSWP/ZD-Messaging-Themes/raw/main/zd-messaging-themes.user.js
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Improve Zendesk chat layout and add night mode
// @author       Laura Solanes (LauraSWP)
// @match        https://*.zendesk.com/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

var $ = window.jQuery;

// === Add general styles and mark chats ====================================
function addGeneralStyles() {
   if(!$('#chat-styles').length) {

    var artCounter = 0;
    $('article[data-test-id="omni-log-comment-item"]').each(function() {
        if (($(this).find("div.cfKRwa").length) || ($(this).find("div.iwLrND").length)){
            $(this).addClass('message-HE-with-note');
        } else if ($(this).find("div.fvrojY").length) {
            $(this).addClass('message-USER-CC');
        } else if ($(this).find('span[data-test-id=omni-log-item-sender] strong').text() == 'HappyBot') {
            $(this).addClass('message-BOT');
        } else if ($(this).find('span[data-test-id=omni-log-item-via]').html()=='via messaging') {
            if ($(this).find('svg[data-test-id=omni-log-avatar-badge-AgentBadge]').length) {
                $(this).addClass('chat-HE');
            } else {
                $(this).addClass('chat-USER');
            }
        } else {
            $(this).addClass('message-EMAIL');
        }
        artCounter++;
    });
}
}
// Loop until styles are added
window.setInterval(function() {
    addGeneralStyles();
}, 1000);
// Add a style element to the document's head
$('head').append(`
    <style id="default-theme-styles">
        /* Default theme styles go here */
    </style>
`);

$('head').append(`
    <style id="dark-theme-styles">
        /* Dark theme styles go here */
    </style>
`);

$('head').append(`
    <style id="custom-theme-styles">
        /* Custom theme styles go here */
    </style>
`);
$('#default-theme-styles').html(`
.default-theme div article[data-test-id="omni-log-comment-item"].chat-HE {
    width: 80%;
    color: #fff !important;
    margin: 1rem 1rem 1rem auto;
    margin-left: auto;border-radius: 1.125rem 1.125rem 0;
    border-radius: 1.125rem 1.125rem 0 1.125rem !important;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(80deg,#7367F0,#9E95F5) !important;
    box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
    border-color: #978ef4;
}
.default-theme #wrapper{
   top: 10px !important
}
.default-theme #main_navigation{
   top: -10px;
}
.default-theme .workspace > header{
   background-image: linear-gradient(#f2f2f2, #fff);
   border-top: solid 1px #f2f2f2;
   border-bottom: solid 1px #ffffff;
}
.default-theme div[role="tablist"] > div > div[aria-selected="true"]{
   background: #f2f2f2;
   margin-top: 1px;
   border: solid 1px #fff;
   border-bottom-color: rgb(255, 255, 255);
   border-bottom-style: solid;
   border-bottom-width: 1px;
   border-bottom: 0;
}
.default-theme div[role="tablist"] > div > div[aria-selected] {
border: solid 1px #e0e0e0;
border-bottom-color: rgb(224, 224, 224);
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: rgb(224, 224, 224);
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom: 0;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-left: 5px;
background: #f3f4f5;
}
.default-theme div[role="tablist"] > div > div[aria-selected]:first-child{
  margin-left: 10px;
}
.default-theme .grid-main-conversation-panel.polaris.ticket.sectioninput[aria-label="Subject"]{
 font-size: 30px;
 padding: 15px 15px 20px 0;
 margin-bottom: 20px;
 text-shadow: 1px 1px #ffffff;
 color: #78a300;
 color: #666;
 border: 0;
 border-bottom: double 7px #78a300;
 border-radius: 0;
 background: #ececec;
 font-weight: bold;
}
.default-theme .omni-conversation-pane .ember-view > div:first-child{
 background: #fff;
 border-bottom: 1px solid #f2f2f2;
 box-shadow: 0px 10px 20px -15px rgba(202, 202, 202, 0.69);
 width: 100%;
 position: absolute;
 padding-left: 20px;
 padding-right: 30px;
 color: #8BA9BE;
 border-left: 1px solid #f2f2f2;
 border-top: 1px solid #f2f2f2;
}
.default-theme div[data-test-id="omni-log-container"]{
 background: #F2F2F2;
 padding-bottom: 10px
}
.default-theme div article[data-test-id="omni-log-comment-item"]{
 padding-bottom: 30px;
 margin: 10px 20px;
 background: #ffffff;
 border-radius: 10px;
 font-size: 16px;
 border: 0;
}
.default-theme div article div[data-test-id="omni-log-item-message"] *{
 font-size: 16px;
 line-height: 22px !important;
}
.default-theme div article div[data-test-id="omni-log-item-message"] ul{
 margin-bottom: 20px;
}
.default-theme div article div[data-test-id="omni-log-item-message"] li{
 margin-bottom: 0;
}
.default-theme div article div[data-test-id="omni-log-item-message"] a{
 text-decoration: underline;
}
.default-theme div article[data-test-id="omni-log-comment-item"]::after{
 content: "";
 position: absolute;
 bottom: 0;
}
.default-theme span[data-test-id="omni-log-item-via"]{
 font-size: 11px;
}
.default-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-note{
 background: #ffffcc;
 width: auto;
 padding-bottom: 15px;
}
.default-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv.cfKRwa,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div.iwLrND{
 padding-left: 0;
 padding-right: 0;
}
.default-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv[data-test-id="omni-log-item-message"]div,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div[data-test-id="omni-log-item-message"]div div{
 border: none;
 background: transparent;
 box-shadow: none;
 padding-bottom: 0;
 -webkit-transform: rotate(0);
 -o-transform: rotate(0);
 -moz-transform: rotate(0);
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-HEspan[data-test-id="omni-log-item-via"],div article[data-test-id="omni-log-comment-item"].chat-HE time,div article[data-test-id="omni-log-comment-item"].chat-HE button svg,div article[data-test-id="omni-log-comment-item"].chat-HEsvg[data-test-id="convo-log-item-read-indicator"]{
 color: #ffffff;
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-HEbutton[data-test-id="convolog-item-message-assign-ticket"]{
 color: #ffffff;
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-HE a{
 color: #ffffff;
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-HE::after{
 content: "";
 position: absolute;
 bottom: 0;
 left: auto;
 right: -7px;
 border-bottom: 8px solid #9D94F5;
 border-right: 8px solid transparent;
 border-left: none;
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-USER{
 width: 80%;
 margin-right: calc(20% - 20px);
 border-bottom-left-radius: 0;
}
.default-theme div article[data-test-id="omni-log-comment-item"].chat-USER::after{
 content: "";
 position: absolute;
 bottom: 0;
 left: -7px;
 right: auto;
 border-bottom: 8px solid #ffffff;
 border-left: 8px solid transparent;
 border-right: none;
}
.default-theme div article[data-test-id="omni-log-comment-item"].message-BOT{
 width: 80%;
 margin-left: calc(20% - 20px);
 background: #fff;
 color: #2f2f2f;
 border: 3px solid #8075f2;
 box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
}
.default-theme div article[data-test-id="omni-log-comment-item"].message-EMAIL {
border: solid 2px #f2f2f2;
box-shadow: 0px 10px 15px #e1e1e1;
}
.default-theme #editor-view{
 border-color: #7367F0 !important;
 box-shadow: 0 3px 10px 0 rgba(34,41,47,.1);
 border: 1px solid;
 border-top-color: currentcolor;
 border-right-color: currentcolor;
 border-bottom-color: currentcolor;
 border-left-color: currentcolor;
 border-top-color: currentcolor;
 border-right-color: currentcolor;
 border-bottom-color: currentcolor;
 border-left-color: currentcolor;
 border-top-color: currentcolor;
 border-right-color: currentcolor;
 border-bottom-color: currentcolor;
 border-left-color: currentcolor;
}
.default-theme .replies-counter{
 background-color: #9b92f5 !important;
}
.default-theme .kqHPFE:focus, .kqHPFE[data-garden-focus-visible="true"]{
 border-color: rgb(115, 103, 240);
 box-shadow: rgb(222, 222, 223) 0px 0px 0px 3px;
}
.default-theme .kqHPFE:hover{
 border-color: rgb(128, 117, 242);
          }
.default-theme .kqHPFE{
appearance: none;
transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
width: 100%;
box-sizing: border-box;
vertical-align: middle;
font-family: inherit;
padding: 0.428571em 0.857143em;
min-height: 32px;
line-height: 1.28571;
font-size: 14px;
display: inline-flex;
-moz-box-align: baseline;
align-items: baseline;
overflow: hidden;
background: #f2f2f2;
border: 1px solid #f2f2f2;
border-radius: 5px;
color: #2f3941;
}
.default-theme #editor-view > div:last-child > div > div > div:first-child{
border-top: none !important;
}
.default-theme #editor-view > div:last-child > div > div > div:nth-child(1){
border-bottom: dashed 1px #cccccc !important;
}
.default-theme #editor-view > div:last-child > div > div > div:nth-child(3){
border-top: dashed 1px #cccccc !important;
background: transparent;
}
.default-theme #editor-view > div > div > div{
border: none;
outline: none !important;
}
.default-theme #editor-view .ck-editor__editable,#editor-view .ck-editor__editable li,#editor-view .ck-editor__editable p{
font-size: 16px;
line-height: 22px;
}
.default-theme #editor-view .ck-editor__editable ul{
margin-bottom: 20px;
}
.default-theme #editor-view .ck-editor__editable li{
margin-bottom: 0;
}
.default-theme #editor-view .ck-editor__editable code,#editor-view .ck-editor__editable pre{
border: 1px solid rgb(233, 235, 237);
border-radius: 8px;
background-color: rgb(248, 249, 249);
font-size: 15px;
}
.default-theme #editor-view .ck-editor__editable pre code{
border: 0;
}
.default-theme .zendesk-editor--rich-text-container{
padding: 0;
background: #ffffff;
}
.default-theme .zendesk-editor--rich-text-container .ck-editor__editable{
padding-top: 10px !important;
padding-bottom: 20px;
}
.default-theme .zendesk-editor--rich-text-container div[aria-label="Public reply composer"]{
background: transparent;
}
.default-theme #editor-view .icLGBZ,#editor-view ul[data-garden-id="dropdowns.menu"] li:last-child{
background-color: #ffffcc !important;
}
.default-theme .zendesk-editor--rich-text-container div[aria-label="Internal note composer"]{
background: #ffffcc;
min-height: 100%;
}
.default-theme #editor-view div[data-test-id="ticket-rich-text-editor"]{
order: 5;
}
.default-theme #editor-view div[data-test-id="rich-text-editor-toolbar-container"]{
top: -7px;
left: 160px;
}
.default-theme #editor-view .zendesk-editor--rich-text-container > div:last-child{
min-height: 0;
}
.default-theme #editor-view.zendesk-editor--rich-text-container> div:last-child[data-role="editor-attachment-container"]{
margin-top: 20px;
margin-bottom: 10px;
padding: 0;
border: dashed 1px #999999;
}
.default-theme .zendesk-note{
margin: 0;
width: auto;
-moz-box-shadow: 0;
-webkit-box-shadow: 0;
box-shadow: 0;
-webkit-transform: rotate(0);
-o-transform: rotate(0);
-moz-transform: rotate(0);
}
.default-theme .fEEkvG{
display: inline;
transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
margin: 0px;
border: 1px solid #ffffff38;
border-radius: 5px;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-overflow: ellipsis;
font-family: inherit;
font-weight: inherit;
box-sizing: border-box;
padding-top: 1px;
font-size: inherit;
background-color: transparent;
color: white;
}
.default-theme .bFnIOx{
 color: rgb(251, 251, 251);
}
.default-theme .sc-1sxh6up-0.jOnDhB {
color: white;
}
.default-theme .sc-1sxh6up-0.jOnDhB::before {
content: "- ";
}
.default-theme .yco3zs-0.jUzcXG.StyledField-sc-12gzfsu-0.bJlzcx textarea {
background: #ffe4b0;
border: 1px solid #ffb327;
min-height: 150px;
}
.default-theme #editor-view > div > div > div {
border: 1px solid;
border-top-color: currentcolor;
border-right-color: currentcolor;
border-bottom-color: currentcolor;
border-left-color: currentcolor;
outline: none !important;
border-color: #7367F0 !important;
}
.default-theme .sc-6iuxl3-0.cDMilx, .sc-6iuxl3-0.cDMilx svg {
background: #8176f2;
color: white !important;
fill: white;
}
.default-theme .fVKboe {
width: 20px;
}
.default-theme #editor-view > div:last-child > div > div > div:nth-child(3) {
background: transparent;
border-top: none !important;
}
.default-theme .StyledButton-sc-qe3ace-0.ifNPOK {
background: #8176f2;
color: white;
width: 100px;
}
.default-theme .sc-1a2xz9g-1.iDQNoj {
bottom: 10px;
position: absolute;
float: right;
right: 30px;
}
.default-theme .theme-selector-wrapper {
z-index: 99999999999;
position: absolute;
bottom: 0;
left: 40%;
display: flex;
}
.default-theme .theme-selector {
appearance: none;
transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
border: 1px solid rgb(216, 220, 222);
border-radius: 4px;
box-sizing: border-box;
vertical-align: middle;
font-family: inherit;
padding: 7px 10px 7px 10px;
line-height: 1.28571;
font-size: 14px;
background-color: rgb(255, 255, 255);
color: rgb(47, 57, 65);
display: inline-flex;
-moz-box-align: baseline;
align-items: baseline;
cursor: text;
overflow: hidden;
}
.default-theme .gear-button {
font-size: 18px;
padding: 7px 10px;
background-color: transparent;
border: none;
cursor: pointer;
}
.default-theme .settings-menu {
  border: 1px solid rgb(216, 220, 222);
  padding: 50px;
  color: rgb(47, 57, 65);
  box-sizing: border-box;
  position: relative;
  left: 0;
  width: 70%;
  z-index: 9999;
  margin: 0 auto;
  right: 0;
  top: 555px;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
.default-theme .lzuyri-0.coYhhN {
background: white !important;
}
.default-theme .sc-1bfb6j4-0.jIQIHh {
width: 200px;
}
.default-theme .sc-1cnyl8h-1.ewyzon.StyledButton-sc-qe3ace-0.fEEkvG {
background: #8176f2;
color: white;
width: 30%;
text-transform: uppercase;
font-size: 10px;
margin-top: -10px;
}
.default-theme .color-settings {
  width: 170px;
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  height: 90px;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-right: 20px;
}
.default-theme #primary-color-code, #secondary-color-code, #extra-color-code, #secondary-color-code, #user-bubble-bg-color-code, #secondary-bg-color-code, #chat-bg-color-code, #text-color-code, #sidebar-bg-color-code, #dropdown-bg-color-code, #label-color-code, #user-bubble-text-color-code {
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  border-radius: 5px;
  width: 100px;
  margin-bottom: 2px;
  margin-top: 5px;
  float: left;
  margin-right: 10px;
}
.default-theme input[type="color"] {
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s ease;
}

.default-theme input[type="color"]:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.default-theme input[type="color"] {
    border: none;
    border-radius: 5px;
    outline: none;
    transition: box-shadow 0.3s ease;
  }
 .default-theme input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: 32px;
      height: 32px;
      background: transparent;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border-radius: 50px;
    }
  .default-theme input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
      border:none;
      border-radius: 50px;
  }
  .default-theme input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
  }
  .default-theme input[type="color"]::-moz-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
    }
   .default-theme .color-settings label {
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 10px;
  width: 100%;
  padding-bottom: 5px;
}
.default-theme #save-button {
  background: #79c844;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.default-theme #reset-button {
  background: #595959;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.default-theme .toggle-button-cover {
  display: grid;
  position: relative;
  width: 400px;
  height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #fafafa;
}

.default-theme .button-cover {
  height: 60px;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  width: 200px;
}

.default-theme .button-cover:before
{
    counter-increment: button-counter;
    content: counter(button-counter);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d7e3e3;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
}

.default-theme .button-cover, .knobs, .layer
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.default-theme .button {
  position: relative;
  top: -7px;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  left: 110px;
}

.default-theme .button.r, .button.r .layer
{
    border-radius: 100px;
}
.default-theme #button-3 .checkbox {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  opacity: 0 !important;
  cursor: pointer !important;
  z-index: 3;
}
.default-theme .knobs
{
    z-index: 2;
}

.default-theme .layer {
  width: 100%;
  background-color: #f2f2f2;
  transition: 0.3s ease all;
  z-index: 1;
}
/* Button 3 */
.default-theme #button-3 .knobs::before {
  content: 'NO';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #595959;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

.default-theme #button-3 .checkbox:active + .knobs:before
{
    width: 46px;
    border-radius: 100px;
}

.default-theme #button-3 .checkbox:checked:active + .knobs:before
{
    margin-left: -26px;
}

.default-theme #button-3 .checkbox:checked + .knobs::before {
  content: 'YES';
  left: 42px;
  background-color: #79C844;
}

.default-theme #button-3 .checkbox:checked ~ .layer {
  background-color: #edfceb;
}
.default-theme h3 {
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f9f9f9;
  margin-bottom: 20px;
}
`);

$('#dark-theme-styles').html(`
.dark-theme .sc-1cnyl8h-1.ewyzon.StyledButton-sc-qe3ace-0.fEEkvG {
    background: #8176f2;
    color: white;
    width: 30%;
    text-transform: uppercase;
    font-size: 10px;
    margin-top: -10px;
  }
  .dark-theme div article[data-test-id="omni-log-comment-item"].chat-HE {
              width: 80%;
              color: #fff !important;
              margin: 1rem 1rem 1rem auto;
              margin-left: auto;border-radius: 1.125rem 1.125rem 0;
              border-radius: 1.125rem 1.125rem 0 1.125rem !important;
              box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
              background-image: linear-gradient(80deg,#7367F0,#9E95F5) !important;
              box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
              border-color: #978ef4;
          }
        .dark-theme #wrapper{
             top: 10px !important
         }
         .dark-theme #main_navigation{
             top: -10px;
         }
         .dark-theme .workspace > header{
             background-image: linear-gradient(#f2f2f2, #fff);
             border-top: solid 1px #f2f2f2;
             border-bottom: solid 1px #ffffff;
         }
         .dark-theme div[role="tablist"] > div > div[aria-selected="true"]{
             background: #f2f2f2;
             margin-top: 1px;
             border: solid 1px #fff;
             border-bottom-color: rgb(255, 255, 255);
             border-bottom-style: solid;
             border-bottom-width: 1px;
             border-bottom: 0;
         }
  .dark-theme div[role="tablist"] > div > div[aria-selected] {
    border: solid 1px #e0e0e0;
      border-bottom-color: rgb(224, 224, 224);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    border-bottom-color: rgb(224, 224, 224);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-left: 5px;
    background: #f3f4f5;
  }
      .dark-theme div[role="tablist"] > div > div[aria-selected]:first-child{
            margin-left: 10px;
        }
     .dark-theme .grid-main-conversation-panel.polaris.ticket.sectioninput[aria-label="Subject"]{
           font-size: 30px;
           padding: 15px 15px 20px 0;
           margin-bottom: 20px;
           text-shadow: 1px 1px #ffffff;
           color: #78a300;
           color: #666;
           border: 0;
           border-bottom: double 7px #78a300;
           border-radius: 0;
           background: #ececec;
           font-weight: bold;
       }
      .dark-theme .omni-conversation-pane .ember-view > div:first-child{
           background: #fff;
           border-bottom: 1px solid #f2f2f2;
           box-shadow: 0px 10px 20px -15px rgba(202, 202, 202, 0.69);
           width: 100%;
           position: absolute;
           padding-left: 20px;
           padding-right: 30px;
           color: #8BA9BE;
           border-left: 1px solid #f2f2f2;
           border-top: 1px solid #f2f2f2;
       }
      .dark-theme div[data-test-id="omni-log-container"]{
           background: #F2F2F2;
           padding-bottom: 10px
       }
     .dark-theme div article[data-test-id="omni-log-comment-item"]{
           padding-bottom: 30px;
           margin: 10px 20px;
           background: #ffffff;
           border-radius: 10px;
           font-size: 16px;
           border: 0;
       }
      .dark-theme div article div[data-test-id="omni-log-item-message"] *{
           font-size: 16px;
           line-height: 22px !important;
       }
     .dark-theme div article div[data-test-id="omni-log-item-message"] ul{
           margin-bottom: 20px;
       }
      .dark-theme div article div[data-test-id="omni-log-item-message"] li{
           margin-bottom: 0;
       }
      .dark-theme div article div[data-test-id="omni-log-item-message"] a{
           text-decoration: underline;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"]::after{
           content: "";
           position: absolute;
           bottom: 0;
       }
      .dark-theme span[data-test-id="omni-log-item-via"]{
           font-size: 11px;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-note{
           background: #ffffcc;
           width: auto;
           padding-bottom: 15px;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv.cfKRwa,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div.iwLrND{
           padding-left: 0;
           padding-right: 0;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv[data-test-id="omni-log-item-message"]div,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div[data-test-id="omni-log-item-message"]div div{
           border: none;
           background: transparent;
           box-shadow: none;
           padding-bottom: 0;
           -webkit-transform: rotate(0);
           -o-transform: rotate(0);
           -moz-transform: rotate(0);
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].chat-HEspan[data-test-id="omni-log-item-via"],div article[data-test-id="omni-log-comment-item"].chat-HE time,div article[data-test-id="omni-log-comment-item"].chat-HE button svg,div article[data-test-id="omni-log-comment-item"].chat-HEsvg[data-test-id="convo-log-item-read-indicator"]{
           color: #ffffff;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].chat-HEbutton[data-test-id="convolog-item-message-assign-ticket"]{
           color: #ffffff;
       }
     .dark-theme div article[data-test-id="omni-log-comment-item"].chat-HE a{
           color: #ffffff;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].chat-HE::after{
           content: "";
           position: absolute;
           bottom: 0;
           left: auto;
           right: -7px;
           border-bottom: 8px solid #9D94F5;
           border-right: 8px solid transparent;
           border-left: none;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].chat-USER{
           width: 80%;
           margin-right: calc(20% - 20px);
           border-bottom-left-radius: 0;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].chat-USER::after{
           content: "";
           position: absolute;
           bottom: 0;
           left: -7px;
           right: auto;
           border-bottom: 8px solid #ffffff;
           border-left: 8px solid transparent;
           border-right: none;
       }
      .dark-theme div article[data-test-id="omni-log-comment-item"].message-BOT{
           width: 80%;
           margin-left: calc(20% - 20px);
           background: #fff;
           color: #2f2f2f;
           border: 3px solid #8075f2;
           box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
       }
  .dark-theme div article[data-test-id="omni-log-comment-item"].message-EMAIL {
    border: solid 2px #f2f2f2;
    box-shadow: 0px 10px 15px #e1e1e1;
  }
     .dark-theme #editor-view{
           border-color: #7367F0 !important;
           box-shadow: 0 3px 10px 0 rgba(34,41,47,.1);
           border: 1px solid;
           border-top-color: currentcolor;
           border-right-color: currentcolor;
           border-bottom-color: currentcolor;
           border-left-color: currentcolor;
           border-top-color: currentcolor;
           border-right-color: currentcolor;
           border-bottom-color: currentcolor;
           border-left-color: currentcolor;
           border-top-color: currentcolor;
           border-right-color: currentcolor;
           border-bottom-color: currentcolor;
           border-left-color: currentcolor;
       }
      .dark-theme .replies-counter{
           background-color: #9b92f5 !important;
       }
     .dark-theme .kqHPFE:focus, .kqHPFE[data-garden-focus-visible="true"]{
           border-color: rgb(115, 103, 240);
           box-shadow: rgb(222, 222, 223) 0px 0px 0px 3px;
       }
     .dark-theme .kqHPFE:hover{
           border-color: rgb(128, 117, 242);
                    }
     .dark-theme .kqHPFE{
         appearance: none;
         transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
         width: 100%;
         box-sizing: border-box;
         vertical-align: middle;
         font-family: inherit;
         padding: 0.428571em 0.857143em;
         min-height: 32px;
         line-height: 1.28571;
         font-size: 14px;
         display: inline-flex;
         -moz-box-align: baseline;
         align-items: baseline;
         overflow: hidden;
         background: #f2f2f2;
         border: 1px solid #f2f2f2;
         border-radius: 5px;
         color: #2f3941;
     }
     .dark-theme #editor-view > div:last-child > div > div > div:first-child{
          border-top: none !important;
      }
   .dark-theme #editor-view > div:last-child > div > div > div:nth-child(1){
          border-bottom: dashed 1px #cccccc !important;
      }
     .dark-theme #editor-view > div:last-child > div > div > div:nth-child(3){
          border-top: dashed 1px #cccccc !important;
          background: transparent;
      }
    .dark-theme #editor-view > div > div > div{
          border: none;
          outline: none !important;
      }
    .dark-theme #editor-view .ck-editor__editable,#editor-view .ck-editor__editable li,#editor-view .ck-editor__editable p{
          font-size: 16px;
          line-height: 22px;
      }
    .dark-theme #editor-view .ck-editor__editable ul{
          margin-bottom: 20px;
      }
    .dark-theme #editor-view .ck-editor__editable li{
          margin-bottom: 0;
      }
    .dark-theme #editor-view .ck-editor__editable code,#editor-view .ck-editor__editable pre{
          border: 1px solid rgb(233, 235, 237);
          border-radius: 8px;
          background-color: rgb(248, 249, 249);
          font-size: 15px;
      }
     .dark-theme #editor-view .ck-editor__editable pre code{
          border: 0;
      }
    .dark-theme .zendesk-editor--rich-text-container{
          padding: 0;
          background: #ffffff;
      }
     .dark-theme .zendesk-editor--rich-text-container .ck-editor__editable{
          padding-top: 10px !important;
          padding-bottom: 20px;
      }
      .dark-theme .zendesk-editor--rich-text-container div[aria-label="Public reply composer"]{
          background: transparent;
      }
    .dark-theme #editor-view .icLGBZ,#editor-view ul[data-garden-id="dropdowns.menu"] li:last-child{
          background-color: #ffffcc !important;
      }
    .dark-theme .zendesk-editor--rich-text-container div[aria-label="Internal note composer"]{
          background: #ffffcc;
          min-height: 100%;
      }
     .dark-theme #editor-view div[data-test-id="ticket-rich-text-editor"]{
          order: 5;
      }
      .dark-theme #editor-view div[data-test-id="rich-text-editor-toolbar-container"]{
          top: -7px;
          left: 160px;
      }
     .dark-theme #editor-view .zendesk-editor--rich-text-container > div:last-child{
          min-height: 0;
      }
      .dark-theme #editor-view.zendesk-editor--rich-text-container> div:last-child[data-role="editor-attachment-container"]{
          margin-top: 20px;
          margin-bottom: 10px;
          padding: 0;
          border: dashed 1px #999999;
      }
     .dark-theme .zendesk-note{
          margin: 0;
          width: auto;
          -moz-box-shadow: 0;
          -webkit-box-shadow: 0;
          box-shadow: 0;
          -webkit-transform: rotate(0);
          -o-transform: rotate(0);
          -moz-transform: rotate(0);
      }
     .dark-theme .fEEkvG{
          display: inline;
          transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
          margin: 0px;
          border: 1px solid #ffffff38;
          border-radius: 5px;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          text-overflow: ellipsis;
          font-family: inherit;
          font-weight: inherit;
          box-sizing: border-box;
          padding-top: 1px;
          font-size: inherit;
          background-color: transparent;
          color: white;
      }
      .dark-theme .bFnIOx{
           color: rgb(251, 251, 251);
       }
     .dark-theme .sc-1sxh6up-0.jOnDhB {
    color: white;
  }
  .dark-theme .sc-1sxh6up-0.jOnDhB::before {
    content: "- ";
  }
  .dark-theme .yco3zs-0.jUzcXG.StyledField-sc-12gzfsu-0.bJlzcx textarea {
    background: #ffe4b0;
    border: 1px solid #ffb327;
    min-height: 150px;
  }
  .dark-theme #editor-view > div > div > div {
    border: 1px solid;
      border-top-color: currentcolor;
      border-right-color: currentcolor;
      border-bottom-color: currentcolor;
      border-left-color: currentcolor;
    outline: none !important;
    border-color: #7367F0 !important;
  }
  .dark-theme .sc-6iuxl3-0.cDMilx, .sc-6iuxl3-0.cDMilx svg {
    background: #8176f2;
    color: white !important;
    fill: white;
  }
  .dark-theme .fVKboe {
    width: 20px;
  }
  .dark-theme #editor-view > div:last-child > div > div > div:nth-child(3) {
    background: transparent;
    border-top: none !important;
  }
  .dark-theme .StyledButton-sc-qe3ace-0.ifNPOK {
    background: #8176f2;
    color: white;
    width: 100px;
  }
  .dark-theme.sc-1a2xz9g-1.iDQNoj {
    bottom: 10px;
    position: absolute;
    float: right;
    right: 30px;
  }
  .dark-theme .theme-selector-wrapper {
      z-index: 99999999999;
      position: absolute;
      bottom: 0;
      left: 40%;
      display: flex;
  }
  .dark-theme .theme-selector {
      appearance: none;
      transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
      border: 1px solid rgb(216, 220, 222);
      border-radius: 4px;
      box-sizing: border-box;
      vertical-align: middle;
      font-family: inherit;
      padding: 7px 10px 7px 10px;
      line-height: 1.28571;
      font-size: 14px;
      background-color: rgb(255, 255, 255);
      color: rgb(47, 57, 65);
      display: inline-flex;
      -moz-box-align: baseline;
      align-items: baseline;
      cursor: text;
      overflow: hidden;
  }
  .dark-theme .gear-button {
      font-size: 18px;
      padding: 7px 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
  }
  .dark-theme .settings-menu {
  border: 1px solid rgb(216, 220, 222);
  padding: 50px;
  color: rgb(47, 57, 65);
  box-sizing: border-box;
  position: relative;
  left: 0;
  width: 70%;
  z-index: 9999;
  margin: 0 auto;
  right: 0;
  top: 555px;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
  .dark-theme .lzuyri-0.coYhhN {
    background: white !important;
  }
  .dark-theme .sc-1bfb6j4-0.jIQIHh {
    width: 200px;
  }
  .dark-theme .color-settings {
  width: 170px;
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  height: 90px;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-right: 20px;
}
.dark-theme #primary-color-code, #secondary-color-code, #extra-color-code, #secondary-color-code, #user-bubble-bg-color-code, #secondary-bg-color-code, #chat-bg-color-code, #text-color-code, #sidebar-bg-color-code, #dropdown-bg-color-code, #label-color-code {
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  border-radius: 5px;
  width: 100px;
  margin-bottom: 2px;
  margin-top: 5px;
  float: left;
  margin-right: 10px;
}
.dark-theme input[type="color"] {
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s ease;
}

.dark-theme input[type="color"]:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.dark-theme input[type="color"] {
    border: none;
    border-radius: 5px;
    outline: none;
    transition: box-shadow 0.3s ease;
  }
 .dark-theme input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: 32px;
      height: 32px;
      background: transparent;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border-radius: 50px;
    }
  .dark-theme input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
      border:none;
      border-radius: 50px;
  }
 .dark-theme input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
  }
 .dark-theme input[type="color"]::-moz-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
    }
    .dark-theme .color-settings label {
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 10px;
  width: 100%;
  padding-bottom: 5px;
}
.dark-theme #reset-button {
  background: #595959;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.dark-theme #save-button {
  background: #79c844;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.dark-theme .toggle-button-cover {
  display: grid;
  position: relative;
  width: 400px;
  height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #fafafa;
}

.dark-theme .button-cover {
  height: 60px;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  width: 200px;
}
.dark-theme .button-cover:before
{
    counter-increment: button-counter;
    content: counter(button-counter);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d7e3e3;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
}

.dark-theme .button-cover, .knobs, .layer
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.dark-theme .button {
  position: relative;
  top: -7px;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  left: 110px;
}

.dark-theme .button.r, .button.r .layer
{
    border-radius: 100px;
}
.dark-theme #button-3 .checkbox {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  opacity: 0 !important;
  cursor: pointer !important;
  z-index: 3;
}

.dark-theme .knobs
{
    z-index: 2;
}

.dark-theme .layer {
  width: 100%;
  background-color: #f2f2f2;
  transition: 0.3s ease all;
  z-index: 1;
}
/* Button 3 */
.dark-theme #button-3 .knobs::before {
  content: 'NO';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #595959;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

.dark-theme #button-3 .checkbox:active + .knobs:before
{
    width: 46px;
    border-radius: 100px;
}

.dark-theme #button-3 .checkbox:checked:active + .knobs:before
{
    margin-left: -26px;
}

.dark-theme #button-3 .checkbox:checked + .knobs::before {
  content: 'YES';
  left: 42px;
  background-color: #79C844;
}

.dark-theme #button-3 .checkbox:checked ~ .layer {
  background-color: #edfceb;
}
.dark-theme h3 {
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f9f9f9;
  margin-bottom: 20px;
}
`);

$('head').append(`
    <style id="custom-theme-styles"> </style>
`);

// === Add theme selector ====================================================
$('body').prepend(`
    <div class="theme-selector-wrapper">
        <select class="theme-selector" id="theme-selector">
            <option value="default">Default Theme</option>
            <option value="dark">Dark Theme</option>
            <option value="custom">Custom Theme</option>
        </select>
        <button class="gear-button" id="gear-button">&#x2699;</button>

    </div>
    <!-- SETTINGS MENU -->
        <div id="settings-menu" class="settings-menu" style="display: none;">
        <!-- A NOTICE EXPLAINING THAT SETTINGS MAY BE LOST IF THEY CHANGE THE THEME AND RELOAD THE PAGE -->
        <h2>Changing the theme will reset your settings. Please save your color settings on a note before changing the theme.</h2>

            <h3>Settings</h3>
            <div class="color-settings">
                <!-- PRIMARY COLOR -->
                <label for="primary-color">Primary Color:</label>
                <input type="text" id="primary-color-code" name="primary-color-code" value="#AACCDD">
                <input type="color" id="primary-color" name="primary-color" value="#AACCDD">

                <br>
                </div>
                <div class="color-settings">
                <!-- SECONDARY COLOR -->
                <label for="secondary-color">Secondary Color:</label>
                <input type="text" id="secondary-color-code" name="secondary-color-code" value="#206EAD">
                <input type="color" id="secondary-color" name="secondary-color" value="#206EAD">
                <br>
                </div>
                <div class="color-settings">
                <!-- EXTRA COLOR -->
                <label for="extra-color">Extra Color:</label>
                <input type="text" id="extra-color-code" name="extra-color-code" value="#FFCC00">
                <input type="color" id="extra-color" name="extra-color" value="#FFCC00">
                <br>
                </div>
                <div class="color-settings">
                <!-- USER BUBBLE -->
                <label for="user-bubble-bg-color">User Bubble:</label>
                <input type="text" id="user-bubble-bg-color-code" name="user-bubble-bg-color-code" value="#ffffff">
                <input type="color" id="user-bubble-bg-color" name="user-bubble-bg-color" value="#ffffff">
                <br>
                </div>
                <div class="color-settings">
                <!-- USER BUBBLE TEXT -->
                <label for="user-bubble-text-color">User Bubble Text:</label>
                <input type="text" id="user-bubble-text-color-code" name="user-bubble-text-color-code" value="#000000">
                <input type="color" id="user-bubble-text-color" name="user-bubble-text-color" value="#000000">
                <br>
                </div>

                <div class="color-settings">
                <!-- SECONDARY BACKGROUND COLOR -->
<label for="secondary-bg-color">Secondary Background:</label>
<input type="text" id="secondary-bg-color-code" name="secondary-bg-color-code" value="#ffffff">
<input type="color" id="secondary-bg-color" name="secondary-bg-color" value="#ffffff">
<br>
</div>
<div class="color-settings">
<!-- CHAT BACKGROUND COLOR -->
<label for="chat-bg-color">Chat Background:</label>
<input type="text" id="chat-bg-color-code" name="chat-bg-color-code" value="#ffffff">
<input type="color" id="chat-bg-color" name="chat-bg-color" value="#ffffff">
<br>
</div>
<div class="color-settings">
<!-- TEXT COLOR -->
  <label for="text-color">Text Color (Sidebar):</label>
                <input type="text" id="text-color-code" name="text-color-code" value="#FFCC00">
                <input type="color" id="text-color" name="text-color" value="#FFCC00">
                <br>
                </div>
                <div class="color-settings">
                <!-- SIDEBAR BACKGROUND COLOR -->
            <label for="sidebar-bg-color">Sidebar Background:</label>
            <input type="text" id="sidebar-bg-color-code" name="sidebar-bg-color-code" value="#ffffff">
            <input type="color" id="sidebar-bg-color" name="sidebar-bg-color" value="#ffffff">
            <br>
            </div>
            <div class="color-settings">
            <!-- DROPDOWN BACKGROUND COLOR -->
            <label for="dropdown-bg-color">Dropdown Background:</label>
            <input type="text" id="dropdown-bg-color-code" name="dropdown-bg-color-code" value="#ffffff">
            <input type="color" id="dropdown-bg-color" name="dropdown-bg-color" value="#ffffff">
            <br>
            </div>
            <div class="color-settings">
            <!-- LABEL COLOR -->
            <label for="label-color">Label Color:</label>
            <input type="text" id="label-color-code" name="label-color-code" value="#ffffff">
            <input type="color" id="label-color" name="label-color" value="#ffffff">
            <br>
            </div>
            <br>
            <!-- SAVE BUTTON -->
            <button id="save-button">Save</button>
            <!-- RESET BUTTON -->
            <button id="reset-button">Reset</button>
            <br>

            <div class="toggle-button-cover">
      <div class="button-cover">
                  <label for="no-distraction-mode">No Distraction Mode:</label>
        <div class="button r" id="button-3">
          <input type="checkbox" id="no-distraction-mode" name="no-distraction-mode" class="checkbox">
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    </div>
        </div>
`);

$('#gear-button').on('click', function() {
    $('#settings-menu').toggle();
});

function setSelectedTheme(theme) {
  localStorage.setItem('selectedTheme', theme);
}

// === Add custom themes =====================================================
const themes = {
    default: {
        primaryColor: '#ffffff',
        secondaryColor: '#000000',
        extraColor: '#FFCC00',
        textColor: '#000000',
        chatBackgroundColor: '#ffffff',
        secondaryBackgroundColor: '#ffffff',
        sidebarBackgroundColor: '#000000',
        dropdownBackgroundColor: '#ffffff',
        userBubbleBackgroundColor: '#000000',
        userBubbleTextColor: '#ffffff',
        labelColor: '#000000',

    },
    dark: {
        textColor: '#ffffff',
        chatBackgroundColor: '#333333',
        secondaryBackgroundColor: '#333333',
        sidebarBackgroundColor: '#333333',
        dropdownBackgroundColor: '#333333',
        labelColor: '#ffffff',
        userBubbleBackgroundColor: '#ffffff',
        userBubbleTextColor: '#000000',
        primaryColor: '#ffffff',
        secondaryColor: '#ffffff',
        extraColor: '#ffffff',

    },
    custom: {
        primaryColor: '#AACCDD',
        secondaryColor: '#206EAD',
        extraColor: '#FFCC00',
        chatBackgroundColor: '#ffffff',
        secondaryBackgroundColor: '#ffffff',
        textColor: '#000000',
        sidebarBackgroundColor: '#ffffff',
        dropdownBackgroundColor: '#ffffff',
        labelColor: '#000000',
        userBubbleBackgroundColor: '#000000',
        userBubbleTextColor: '#ffffff',

    },
};
// === Update custom theme colors ============================================
function updateCustomThemeColors() {
    const customColors = {
        primaryColor: $('#primary-color-code').val(),
        secondaryColor: $('#secondary-color-code').val(),
        extraColor: $('#extra-color-code').val(),
        sidebarBackgroundColor: $('#sidebar-bg-color-code').val(),
        dropdownBackgroundColor: $('#dropdown-bg-color-code').val(),
        labelColor: $('#label-color-code').val(),
        textColor: $('#text-color-code').val(),
        chatBackgroundColor: $('#chat-bg-color-code').val(),
        secondaryBackgroundColor: $('#secondary-bg-color-code').val(),
        userBubbleBackgroundColor: $('#user-bubble-bg-color-code').val(),
        userBubbleTextColor: $('#user-bubble-text-color-code').val(),
    };

    themes.custom = { ...themes.custom, ...customColors };
    localStorage.setItem('customColors', JSON.stringify(customColors));
    applyTheme('custom');
}

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.default;

  if (themeName === 'custom') {
    const customColors = JSON.parse(localStorage.getItem('customColors'));
    if (customColors) {
      themes.custom.primaryColor = customColors.primaryColor;
      themes.custom.secondaryColor = customColors.secondaryColor;
      themes.custom.extraColor = customColors.extraColor;
      themes.custom.sidebarBackgroundColor = customColors.sidebarBackgroundColor;
      themes.custom.dropdownBackgroundColor = customColors.dropdownBackgroundColor;
      themes.custom.labelColor = customColors.labelColor;
      themes.custom.textColor = customColors.textColor;
      themes.custom.chatBackgroundColor = customColors.chatBackgroundColor;
      themes.custom.secondaryBackgroundColor = customColors.secondaryBackgroundColor;
      themes.custom.userBubbleBackgroundColor = customColors.userBubbleBackgroundColor;
      themes.custom.userBubbleTextColor = customColors.userBubbleTextColor;
      updateCustomThemeCSS();
    }
  }

  // Remove all theme classes from body
  $('body').removeClass('default-theme dark-theme custom-theme');

  // Add the selected theme class to body
  $('body').addClass(`${themeName}-theme`);

  // Show or hide the style elements based on the selected theme
  $('#default-theme-styles').prop('disabled', themeName !== 'default');
  $('#dark-theme-styles').prop('disabled', themeName !== 'dark');
  $('#custom-theme-styles').prop('disabled', themeName !== 'custom');
}




// Function to update custom theme CSS
function updateCustomThemeCSS() {
    const primaryColor = themes.custom.primaryColor;
    const secondaryColor = themes.custom.secondaryColor;
    const extraColor = themes.custom.extraColor;
    const sidebarBackgroundColor = themes.custom.sidebarBackgroundColor;
    const dropdownBackgroundColor = themes.custom.dropdownBackgroundColor;
    const labelColor = themes.custom.labelColor;
    const secondaryBackgroundColor = themes.custom.secondaryBackgroundColor;
    const chatBackgroundColor = themes.custom.chatBackgroundColor;
    const textColor = themes.custom.textColor;
    const userBubbleBackgroundColor = themes.custom.userBubbleBackgroundColor;
    const userBubbleTextColor = themes.custom.userBubbleTextColor;
    const css = `
    .sidebar_box_container {
        background: ${sidebarBackgroundColor};
      }
          .sc-1cnyl8h-1.ewyzon.StyledButton-sc-qe3ace-0.fEEkvG {
        background: ${primaryColor};
        color: white;
        width: 30%;
        text-transform: uppercase;
        font-size: 10px;
        margin-top: -10px;
      }
      .cEdxUv > svg, .cEdxUv .StyledText-sc-1a6hivh-0 {
        color: ${textColor};
      }
      .xw24e-0.hURzKX {
        color: ${textColor};
      }
      .kiLfEN {
        background-color: ${sidebarBackgroundColor} !important;

      }
      .kqHPFE {
        background: ${dropdownBackgroundColor} !important;
        border: 1px solid ${dropdownBackgroundColor} !important;
        border-radius: 5px;
        color: ${textColor} !important;
      }
                div article[data-test-id="omni-log-comment-item"].chat-HE {
                  width: 80%;
                  color: #fff !important;
                  margin: 1rem 1rem 1rem auto;
                  margin-left: auto;border-radius: 1.125rem 1.125rem 0;
                  border-radius: 1.125rem 1.125rem 0 1.125rem !important;
                  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
                  background-image: linear-gradient(80deg, ${primaryColor}, ${secondaryColor}) !important;
                  border-color: ${extraColor};
                  box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
              }
             #wrapper{
                 top: 10px !important
             }
             #main_navigation{
                 top: -10px;
             }
             .workspace > header{
                 background-image: linear-gradient(${extraColor}, ${secondaryBackgroundColor});
                 border-top: solid 1px #f2f2f2;
                 border-bottom: solid 1px ${secondaryBackgroundColor};
             }
             div[role="tablist"] > div > div[aria-selected="true"]{
                 background: ${chatBackgroundColor};
                 margin-top: 1px;
                 border: solid 1px #fff;
                 border-bottom-color: rgb(255, 255, 255);
                 border-bottom-style: solid;
                 border-bottom-width: 1px;
                 border-bottom: 0;
             }
      div[role="tablist"] > div > div[aria-selected] {
        border: solid 1px #e0e0e0;
          border-bottom-color: rgb(224, 224, 224);
          border-bottom-style: solid;
          border-bottom-width: 1px;
        border-bottom-color: rgb(224, 224, 224);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-left: 5px;
        background: ${extraColor};
      }
            div[role="tablist"] > div > div[aria-selected]:first-child{
                margin-left: 10px;
            }
           .grid-main-conversation-panel.polaris.ticket.sectioninput[aria-label="Subject"]{
               font-size: 30px;
               padding: 15px 15px 20px 0;
               margin-bottom: 20px;
               text-shadow: 1px 1px #ffffff;
               color: #78a300;
               color: #666;
               border: 0;
               border-bottom: double 7px #78a300;
               border-radius: 0;
               background: #ececec;
               font-weight: bold;
           }
           .omni-conversation-pane .ember-view > div:first-child{
               background: #fff;
               border-bottom: 1px solid ${chatBackgroundColor};
               box-shadow: 0px 10px 20px -15px rgba(202, 202, 202, 0.69);
               width: 100%;
               position: absolute;
               padding-left: 20px;
               padding-right: 30px;
               color: #8BA9BE;
               border-left: 1px solid #f2f2f2;
               border-top: 1px solid #f2f2f2;
           }
           div[data-test-id="omni-log-container"]{
               background: ${chatBackgroundColor};
               padding-bottom: 10px
           }
           div article[data-test-id="omni-log-comment-item"]{
               padding-bottom: 30px;
               margin: 10px 20px;
               background: #ffffff;
               border-radius: 10px;
               font-size: 16px;
               border: 0;
           }
           div article div[data-test-id="omni-log-item-message"] *{
               font-size: 16px;
               line-height: 22px !important;
           }
           div article div[data-test-id="omni-log-item-message"] ul{
               margin-bottom: 20px;
           }
           div article div[data-test-id="omni-log-item-message"] li{
               margin-bottom: 0;
           }
           div article div[data-test-id="omni-log-item-message"] a{
               text-decoration: underline;
           }
           div article[data-test-id="omni-log-comment-item"]::after{
               content: "";
               position: absolute;
               bottom: 0;
           }
           span[data-test-id="omni-log-item-via"]{
               font-size: 11px;
           }
           div article[data-test-id="omni-log-comment-item"].message-HE-with-note{
               background: #ffffcc;
               width: auto;
               padding-bottom: 15px;
           }
           div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv.cfKRwa,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div.iwLrND{
               padding-left: 0;
               padding-right: 0;
           }
           div article[data-test-id="omni-log-comment-item"].message-HE-with-notediv[data-test-id="omni-log-item-message"]div,div article[data-test-id="omni-log-comment-item"].message-HE-with-note div[data-test-id="omni-log-item-message"]div div{
               border: none;
               background: transparent;
               box-shadow: none;
               padding-bottom: 0;
               -webkit-transform: rotate(0);
               -o-transform: rotate(0);
               -moz-transform: rotate(0);
           }
           div article[data-test-id="omni-log-comment-item"].chat-HEspan[data-test-id="omni-log-item-via"],div article[data-test-id="omni-log-comment-item"].chat-HE time,div article[data-test-id="omni-log-comment-item"].chat-HE button svg,div article[data-test-id="omni-log-comment-item"].chat-HEsvg[data-test-id="convo-log-item-read-indicator"]{
               color: #ffffff;
           }
           div article[data-test-id="omni-log-comment-item"].chat-HEbutton[data-test-id="convolog-item-message-assign-ticket"]{
               color: #ffffff;
           }
           div article[data-test-id="omni-log-comment-item"].chat-HE a{
               color: #ffffff;
           }
           div article[data-test-id="omni-log-comment-item"].chat-HE::after{
               content: "";
               position: absolute;
               bottom: 0;
               left: auto;
               right: -7px;
               border-bottom: 8px solid ${secondaryColor};
               border-right: 8px solid transparent;
               border-left: none;
           }
           div article[data-test-id="omni-log-comment-item"].chat-USER{
               width: 80%;
               margin-right: calc(20% - 20px);
               border-bottom-left-radius: 0;
           }
           div article[data-test-id="omni-log-comment-item"].chat-USER::after{
               content: "";
               position: absolute;
               bottom: 0;
               left: -7px;
               right: auto;
               border-bottom: 8px solid #ffffff;
               border-left: 8px solid transparent;
               border-right: none;
           }
           div article[data-test-id="omni-log-comment-item"].message-BOT{
               width: 80%;
               margin-left: calc(20% - 20px);
               background: #fff;
               color: #2f2f2f;
               border: 3px solid ${primaryColor};
               box-shadow: 0 4px 8px 0 rgba(34,41,47,.12);
           }
      div article[data-test-id="omni-log-comment-item"].message-EMAIL {
        border: solid 2px #f2f2f2;
        box-shadow: 0px 10px 15px #e1e1e1;
      }
           #editor-view{
               border-color: ${primaryColor} !important;
               box-shadow: 0 3px 10px 0 rgba(34,41,47,.1);
               border: 1px solid;
               border-top-color: currentcolor;
               border-right-color: currentcolor;
               border-bottom-color: currentcolor;
               border-left-color: currentcolor;
               border-top-color: currentcolor;
               border-right-color: currentcolor;
               border-bottom-color: currentcolor;
               border-left-color: currentcolor;
               border-top-color: currentcolor;
               border-right-color: currentcolor;
               border-bottom-color: currentcolor;
               border-left-color: currentcolor;
           }
           .replies-counter{
               background-color: #9b92f5 !important;
           }
           .kqHPFE:focus, .kqHPFE[data-garden-focus-visible="true"]{
               border-color: rgb(115, 103, 240);
               box-shadow: rgb(222, 222, 223) 0px 0px 0px 3px;
           }
           .kqHPFE:hover{
               border-color: rgb(128, 117, 242);
                        }
         .kqHPFE{
             appearance: none;
             transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
             width: 100%;
             box-sizing: border-box;
             vertical-align: middle;
             font-family: inherit;
             padding: 0.428571em 0.857143em;
             min-height: 32px;
             line-height: 1.28571;
             font-size: 14px;
             display: inline-flex;
             -moz-box-align: baseline;
             align-items: baseline;
             overflow: hidden;
             background: #f2f2f2;
             border: 1px solid #f2f2f2;
             border-radius: 5px;
             color: #2f3941;
         }
          #editor-view > div:last-child > div > div > div:first-child{
              border-top: none !important;
          }
          #editor-view > div:last-child > div > div > div:nth-child(1){
              border-bottom: dashed 1px #cccccc !important;
          }
          #editor-view > div:last-child > div > div > div:nth-child(3){
              border-top: dashed 1px #cccccc !important;
              background: transparent;
          }
          #editor-view > div > div > div{
              border: none;
              outline: none !important;
          }
          #editor-view .ck-editor__editable,#editor-view .ck-editor__editable li,#editor-view .ck-editor__editable p{
              font-size: 16px;
              line-height: 22px;
          }
          #editor-view .ck-editor__editable ul{
              margin-bottom: 20px;
          }
          #editor-view .ck-editor__editable li{
              margin-bottom: 0;
          }
          #editor-view .ck-editor__editable code,#editor-view .ck-editor__editable pre{
              border: 1px solid rgb(233, 235, 237);
              border-radius: 8px;
              background-color: rgb(248, 249, 249);
              font-size: 15px;
          }
          #editor-view .ck-editor__editable pre code{
              border: 0;
          }
          .zendesk-editor--rich-text-container{
              padding: 0;
              background: #ffffff;
          }
          .zendesk-editor--rich-text-container .ck-editor__editable{
              padding-top: 10px !important;
              padding-bottom: 20px;
          }
          .zendesk-editor--rich-text-container div[aria-label="Public reply composer"]{
              background: transparent;
          }
          #editor-view .icLGBZ,#editor-view ul[data-garden-id="dropdowns.menu"] li:last-child{
              background-color: #ffffcc !important;
          }
          .zendesk-editor--rich-text-container div[aria-label="Internal note composer"]{
              background: #ffffcc;
              min-height: 100%;
          }
          #editor-view div[data-test-id="ticket-rich-text-editor"]{
              order: 5;
          }
          #editor-view div[data-test-id="rich-text-editor-toolbar-container"]{
              top: -7px;
              left: 160px;
          }
          #editor-view .zendesk-editor--rich-text-container > div:last-child{
              min-height: 0;
          }
          #editor-view.zendesk-editor--rich-text-container> div:last-child[data-role="editor-attachment-container"]{
              margin-top: 20px;
              margin-bottom: 10px;
              padding: 0;
              border: dashed 1px #999999;
          }
          .zendesk-note{
              margin: 0;
              width: auto;
              -moz-box-shadow: 0;
              -webkit-box-shadow: 0;
              box-shadow: 0;
              -webkit-transform: rotate(0);
              -o-transform: rotate(0);
              -moz-transform: rotate(0);
          }
          .fEEkvG{
              display: inline;
              transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
              margin: 0px;
              border: 1px solid #ffffff38;
              border-radius: 5px;
              cursor: pointer;
              overflow: hidden;
              text-decoration: none;
              text-overflow: ellipsis;
              font-family: inherit;
              font-weight: inherit;
              box-sizing: border-box;
              padding-top: 1px;
              font-size: inherit;
              background-color: transparent;
              color: white;
          }
           .bFnIOx{
               color: rgb(251, 251, 251);
           }
           .sc-1sxh6up-0.jOnDhB {
        color: white;
      }
      .sc-1sxh6up-0.jOnDhB::before {
        content: "- ";
      }
      .yco3zs-0.jUzcXG.StyledField-sc-12gzfsu-0.bJlzcx textarea {
        background: #ffe4b0;
        border: 1px solid #ffb327;
        min-height: 150px;
      }
      #editor-view > div > div > div {
        border: 1px solid;
          border-top-color: currentcolor;
          border-right-color: currentcolor;
          border-bottom-color: currentcolor;
          border-left-color: currentcolor;
        outline: none !important;
        border-color: ${primaryColor} !important;
      }
      .sc-6iuxl3-0.cDMilx, .sc-6iuxl3-0.cDMilx svg {
        background: ${primaryColor};
        color: white !important;
        fill: white;
      }
      .fVKboe {
        width: 20px;
      }
      #editor-view > div:last-child > div > div > div:nth-child(3) {
        background: transparent;
        border-top: none !important;
      }
      .StyledButton-sc-qe3ace-0.ifNPOK {
        background: ${primaryColor};
        color: white;
        width: 100px;
      }
      .sc-1a2xz9g-1.iDQNoj {
        bottom: 10px;
        position: absolute;
        float: right;
        right: 30px;
      }
      .theme-selector-wrapper {
          z-index: 99999999999;
          position: absolute;
          bottom: 0;
          left: 40%;
          display: flex;
      }
      .theme-selector {
          appearance: none;
          transition: border-color 0.25s ease-in-out 0s, box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s, color 0.25s ease-in-out 0s, z-index 0.25s ease-in-out 0s;
          border: 1px solid rgb(216, 220, 222);
          border-radius: 4px;
          box-sizing: border-box;
          vertical-align: middle;
          font-family: inherit;
          padding: 7px 10px 7px 10px;
          line-height: 1.28571;
          font-size: 14px;
          background-color: rgb(255, 255, 255);
          color: rgb(47, 57, 65);
          display: inline-flex;
          -moz-box-align: baseline;
          align-items: baseline;
          cursor: text;
          overflow: hidden;
      }
      .gear-button {
          font-size: 18px;
          padding: 7px 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
      }
.settings-menu {
  border: 1px solid rgb(216, 220, 222);
  padding: 50px;
  color: rgb(47, 57, 65);
  box-sizing: border-box;
  position: relative;
  left: 0;
  width: 70%;
  z-index: 9999;
  margin: 0 auto;
  right: 0;
  top: 555px;
  font-size: 16px;
  background-color: white;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}
      .lzuyri-0.coYhhN {
        background: white !important;
      }
      .sc-1bfb6j4-0.jIQIHh {
        width: 200px;
      }
      .color-settings {
  width: 170px;
  float: left;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  height: 90px;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  padding-right: 20px;
}
#primary-color-code, #secondary-color-code, #extra-color-code, #secondary-color-code, #user-bubble-bg-color-code, #secondary-bg-color-code, #chat-bg-color-code, #text-color-code, #sidebar-bg-color-code, #dropdown-bg-color-code, #label-color-code, #user-bubble-text-color-code {
  border: 1px solid #f2f2f2;
  background: #f2f2f2;
  border-radius: 5px;
  width: 100px;
  margin-bottom: 2px;
  margin-top: 5px;
  float: left;
  margin-right: 10px;
}
input[type="color"] {
  border: none;
  border-radius: 5px;
  outline: none;
  transition: box-shadow 0.3s ease;
}
input[type="color"] {
    -webkit-appearance: none;
    border: none;
    width: 32px;
    height: 32px;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border-radius: 50px;
  }
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
    border:none;
    border-radius: 50px;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
}
input[type="color"]::-moz-color-swatch {
  border: none;
  border-radius: 50px;
  box-shadow: 0px 1px 5px 1px #eee;
}
  .color-settings label {
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 10px;
  width: 100%;
  padding-bottom: 5px;
}
#reset-button {
  background: #595959;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
#save-button {
  background: #79c844;
  padding: 10px;
    padding-right: 10px;
    padding-left: 10px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 20px;
  color: white;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

.button-cover:before
{
    counter-increment: button-counter;
    content: counter(button-counter);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d7e3e3;
    font-size: 12px;
    line-height: 1;
    padding: 5px;
}

.button-cover, .knobs, .layer
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.button {
  position: relative;
  top: -7px;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  left: 110px;
}

.button.r, .button.r .layer
{
    border-radius: 100px;
}
.knobs
{
    z-index: 2;
}

.layer {
  width: 100%;
  background-color: #f2f2f2;
  transition: 0.3s ease all;
  z-index: 1;
}
/* Button 3 */
#button-3 .knobs::before {
  content: 'NO';
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #595959;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before
{
    width: 46px;
    border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before
{
    margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs::before {
  content: 'YES';
  left: 42px;
  background-color: #79C844;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #edfceb;
}
#button-3 .checkbox {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  opacity: 0 !important;
  cursor: pointer !important;
  z-index: 3;
}
.toggle-button-cover {
  display: grid;
  position: relative;
  width: 400px;
  height: 100px;
  box-sizing: border-box;
  border-top: 1px solid #fafafa;
}
.button-cover {
  height: 60px;
  margin: 20px;
  background-color: #fff;
  border-radius: 4px;
  width: 200px;
}
h3 {
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f9f9f9;
  margin-bottom: 20px;
}
.chat-USER {
    background: ${userBubbleBackgroundColor} !important;

  }
    `;

    $('#custom-theme-styles').html(css);
}


$('#theme-selector').on('change', function () {
  const selectedTheme = $(this).val();
  applyTheme(selectedTheme);
  setSelectedTheme(selectedTheme);
});


applyTheme('default');


// === Toggle no-distraction mode =============================================
function toggleNoDistractionMode() {
if ($('#no-distraction-mode').is(':checked')) {
$('body').addClass('no-distraction');
} else {
$('body').removeClass('no-distraction');
}
}

$(document).ready(function() {
// === Toggle settings menu visibility =======================================
$('#theme-selector').on('change', function() {
if ($(this).val() === 'custom') {
$('.settings-menu').show();
} else {
$('.settings-menu').hide();
}
});

 // === Open color picker =======================================================
 // === Update custom theme colors when a color is selected =====================
$('.color-settings input[type="color"]').on('input', function () {
    const id = $(this).attr('id');
    const textInputId = id.substring(0, id.lastIndexOf('-')) + '-code';
    $('#' + textInputId).val($(this).val());
    if ($('#theme-selector').val() === 'custom') {
        updateCustomThemeColors();
        saveSettings();
    }
});

$('.color-settings input[type="text"]').on('input', function () {
    const id = $(this).attr('id');
    const colorInputId = id.substring(0, id.lastIndexOf('-')) + '-color';
    $('#' + colorInputId).val($(this).val());
    if ($('#theme-selector').val() === 'custom') {
        updateCustomThemeColors();
        saveSettings();
    }
});


// === Load settings ==========================================================
function loadSettings() {
    const selectedTheme = localStorage.getItem('selectedTheme') || 'default';

    if (selectedTheme) {
        $("#theme-selector").val(selectedTheme);
    }

    if (selectedTheme === 'custom') {
        const customColors = JSON.parse(localStorage.getItem('customColors'));
        if (customColors) {
            // Update color inputs with saved values
            $('#primary-color-code').val(customColors.primaryColor);
            $('#secondary-color-code').val(customColors.secondaryColor);
            $('#extra-color-code').val(customColors.extraColor);
            $('#text-color-code').val(customColors.textColor);
            $('#secondary-bg-color-code').val(customColors.secondaryBackgroundColor);
            $('#sidebar-bg-color-code').val(customColors.sidebarBackgroundColor);
            $('#dropdown-bg-color-code').val(customColors.dropdownBackgroundColor);
            $('#label-color-code').val(customColors.labelColor);
            $('#user-bubble-bg-color-code').val(customColors.userBubbleBackgroundColor);
            $('#user-bubble-text-color-code').val(customColors.userBubbleTextColor);
            $('#chat-bg-color-code').val(customColors.chatBackgroundColor);

            $('#primary-color').val(customColors.primaryColor);
            $('#secondary-color').val(customColors.secondaryColor);
            $('#extra-color').val(customColors.extraColor);
            $('#sidebar-bg-color').val(customColors.sidebarBackgroundColor);
            $('#dropdown-bg-color').val(customColors.dropdownBackgroundColor);
            $('#label-color').val(customColors.labelColor);
            $('#user-bubble-bg-color').val(customColors.userBubbleBackgroundColor);
            $('#user-bubble-text-color').val(customColors.userBubbleTextColor);
            $('#text-color').val(customColors.textColor);
            $('#secondary-bg-color').val(customColors.secondaryBackgroundColor);
            $('#chat-bg-color').val(customColors.chatBackgroundColor);

            // Update custom theme object
            themes.custom = { ...themes.custom, ...customColors };
        }
    }

    applyTheme(selectedTheme);
}




function updateThemeInputs(selectedTheme) {
  if (selectedTheme === 'custom') {
    $('.color-settings input').prop('disabled', false);
    $('.color-settings button').prop('disabled', false);
    $('#reset-button').prop('disabled', false);
  } else {
    $('.color-settings input').prop('disabled', true);
    $('.color-settings button').prop('disabled', true);
    $('#reset-button').prop('disabled', true);
  }
}

loadSettings();

  // === Save settings ==========================================================
function saveSettings() {
    // Save the selected theme
    const selectedTheme = $("#theme-selector").val();
    localStorage.setItem("selectedTheme", selectedTheme);

    if (selectedTheme === "custom") {
        // Save custom colors
        const customColors = {
            primaryColor: $('#primary-color-code').val(),
            secondaryColor: $('#secondary-color-code').val(),
            extraColor: $('#extra-color-code').val(),
            sidebarBackgroundColor: $('#sidebar-bg-color-code').val(),
            dropdownBackgroundColor: $('#dropdown-bg-color-code').val(),
            labelColor: $('#label-color-code').val(),
            userBubbleBackgroundColor: $('#user-bubble-bg-color-code').val(),
            userBubbleTextColor: $('#user-bubble-text-color-code').val(),
            textColor: $('#text-color-code').val(),
            chatBackgroundColor: $('#chat-bg-color-code').val(),
            secondaryBackgroundColor: $('#secondary-bg-color-code').val(),
        };
        localStorage.setItem("customColors", JSON.stringify(customColors));
    }
}

$(document).ready(function() {
  loadSettings();
  // Event listeners
$("#theme-selector").on("change", function () {
    const selectedTheme = $(this).val();
    applyTheme(selectedTheme);
    setSelectedTheme(selectedTheme);
    saveSettings(); // Add this line
});
// === Reset custom theme colors ================================================
$('#reset-button').on('click', function() {
    $('#primary-color-code').val('#78a300');
    $('#secondary-color-code').val('#78a300');
    $('#extra-color-code').val('#78a300');
    $('#sidebar-bg-color-code').val('#78a300');
    $('#dropdown-bg-color-code').val('#78a300');
    $('#label-color-code').val('#78a300');
    $('#user-bubble-bg-color-code').val('#78a300');
    $('#text-color-code').val('#78a300');
    $('#secondary-bg-color-code').val('#78a300');
    $('#chat-bg-color-code').val('#78a300');
    $('#user-bubble-text-color-code').val('#78a300');

    $('#primary-color').val('#78a300');
    $('#secondary-color').val('#78a300');
    $('#extra-color').val('#78a300');
    $('#sidebar-bg-color').val('#78a300');
    $('#dropdown-bg-color').val('#78a300');
    $('#label-color').val('#78a300');
    $('#user-bubble-bg-color').val('#78a300');
    $('#text-color').val('#78a300');
    $('#secondary-bg-color').val('#78a300');
    $('#chat-bg-color').val('#78a300');
    $('#user-bubble-text-color').val('#78a300');
});

// === Save settings when changes are made ====================================
$('#user-bubble-text-color').on('input', function() {
    $('#user-bubble-text-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#user-bubble-text-color-code').on('input', function() {
    $('#user-bubble-text-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#user-bubble-bg-color').on('input', function() {
    $('#user-bubble-bg-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#user-bubble-bg-color-code').on('input', function() {
    $('#user-bubble-bg-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#sidebar-bg-color').on('input', function() {
    $('#sidebar-bg-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#sidebar-bg-color-code').on('input', function() {
    $('#sidebar-bg-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
    $('#dropdown-bg-color').on('input', function() {
    $('#dropdown-bg-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#dropdown-bg-color-code').on('input', function() {
    $('#dropdown-bg-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#label-color').on('input', function() {
    $('#label-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#label-color-code').on('input', function() {
    $('#label-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#chat-bg-color').on('input', function() {
    $('#chat-bg-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#chat-bg-color-code').on('input', function() {
    $('#chat-bg-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
    $('#secondary-bg-color').on('input', function() {
    $('#secondary-bg-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});
$('#secondary-bg-color-code').on('input', function() {
    $('#secondary-bg-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#primary-color').on('input', function() {
    $('#primary-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#secondary-color').on('input', function() {
    $('#secondary-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#text-color').on('input', function() {
    $('#text-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#extra-color').on('input', function() {
    $('#extra-color-code').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#primary-color-code').on('input', function() {
    $('#primary-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#secondary-color-code').on('input', function() {
    $('#secondary-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#extra-color-code').on('input', function() {
    $('#extra-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#text-color-code').on('input', function() {
    $('#text-color').val($(this).val());
    updateCustomThemeColors();
    saveSettings();
});

$('#save-button').on('click', function() {
    themes.custom.primaryColor = $('#primary-color').val();
    themes.custom.secondaryColor = $('#secondary-color').val();
    themes.custom.extraColor = $('#extra-color').val();
    themes.custom.textColor = $('#text-color').val();
    themes.custom.sidebarBackgroundColor = $('#sidebar-bg-color').val();
    themes.custom.labelColor = $('#label-color').val();
    themes.custom.textColor = $('#text-color').val();
    themes.custom.dropdownBackgroundColor = $('#dropdown-bg-color').val();
    themes.custom.userBubbleBackgroundColor = $('#user-bubble-bg-color').val();
    themes.custom.userBubbleTextColor = $('#user-bubble-text-color').val();
    themes.custom.chatBackgroundColor = $('#chat-bg-color').val();
    themes.custom.secondaryBackgroundColor = $('#secondary-bg-color').val();
    updateCustomThemeColors();
    saveSettings();
});
// === Disable/enable color inputs and buttons depending on the selected theme ====

$('#theme-selector').on('change', function() {
    saveSettings();
    if ($(this).val() === 'custom') {
        $('.color-settings input').prop('disabled', false);
        $('.color-settings button').prop('disabled', false);
        $('#reset-button').prop('disabled', false);
    } else {
        $('.color-settings input').prop('disabled', true);
        $('.color-settings button').prop('disabled', true);
        $('#reset-button').prop('disabled', true);
    }
});

// === Initialize the custom theme colors =======================================

updateCustomThemeColors();

    function setThemeFromLocalStorage() {
    const selectedTheme = localStorage.getItem("selectedTheme") || "default";
    applyTheme(selectedTheme);
    $('#theme-selector').val(selectedTheme);
}


// === Apply no-distraction mode ==============================================
  $("#no-distraction-mode").on("change", function () {
    toggleNoDistractionMode();
    saveSettings();
  });
  toggleNoDistractionMode();

  // Add event listeners for saving settings
  $("#theme-selector, .color-settings input, #no-distraction-mode").on(
    "change",
    function () {
      saveSettings();
    }
  );
    setThemeFromLocalStorage();
});
    });

