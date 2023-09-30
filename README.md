# INFO 340 Project

Live Firebase-Hosted Link:
https://ezsteeze-1e6b7.web.app/home

This repository contains code for an interactive information web app, created for the _INFO 340: Client-Side Web Development_ course at the UW iSchool in Spring 2023.

The website is a React app called "ezSteeze" which allows users to select a time to be scheduled for a rental appointment at Play It Again Sports in Lynnwood, WA.

Users can also select the equipment they would like to use based on previous rentals, their sizing or technical preferences, or other factors, depending on what is currently available in the store's rental inventory.

The app uses artificial data from an currently-in-use operational database structure, stored in JSON files.

### Lighthouse Discrepancies 

While I believe there is great value in the WCAG standards, there are several sticking points I have with Lighthouse and WACG. Attached is a study on the differences between white text on buttons and black text on buttons. WCAG only allows for black text on a majority of the color spectrum of buttons but as the study shows White text on buttons is more legible for both color-blind and non color-blind users. I believe this study has merit and thus I have left the buttons in our final product with white text as it better fits our theme and helps promote accessibility for a majority of our users. Additionally there are checks where list items have to be a different color from the list background, in our situation I believe this does not pertain as our list item text is a different color from the list item background and is thus accessible to color-blind users. This is why our Lighthouse accessibility scores are slightly below 100. 

Thank you for understanding,

Wyatt Steere
https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio
