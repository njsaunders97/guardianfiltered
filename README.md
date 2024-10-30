# GuardianFiltered
#### Abstract
At the current stage of my course, I have been assigned a Reddit API Client project which extracts information from Reddit and makes minimised snippets, filterable by category and search term. Just for a bit of uniqueness, I will instead create **GuardianFiltered**, which shows a similarly filtered stream of Guardian articles via the [Guardian OpenPlatform API](https://open-platform.theguardian.com/). 

The basic idea is to make a scrollable, lightweight Guardian article-feed. There will be 3 high-level states:

 - No filters, showing only the 10 most recent articles
 - Search filters, with the 10 'most relevant' articles
 - Category filters, with the 10 most recent articles from those categories

The project will be tracked in the [GuardianFiltered Github Project](https://github.com/users/njsaunders97/projects/1).

## Project Requirements:
#### Infrastructure/Documentation
-   Version control your application with Git and host the repository on GitHub
- Use a project management tool
- Write a README (using Markdown) that documents your project including:
    -   Wireframes
	-   Project Plan
    -   Technologies used
    -   Features
    -   Future work
#### Build
-   Build the application using React and Redux
-   Users can access your application at a URL
-   Users see an initial view of the data when first visiting the app
-   Users can search the data using terms
-   Users can filter the data based on categories that are predefined
-   Users are shown a detailed view (modal or new page/route) when they select an item
-   Users are able to leave an error state
-   Get 90+ scores on  [Lighthouse](https://web.dev/measure/)
#### Testing
-   Write following the [TDD](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test-driven%20development%20%28TDD%29,with%20another%20new%20test%20case.) ethos
-   Write unit tests for your components using Jest and Enzyme
-   Write end-to-end tests for your application
#### UX
-   Users can use the application on any device (desktop to mobile) 
-   Users can use the application on any modern browser
-   Users are delighted with a cohesive design system
-   Users are delighted with animations and transitions
#### Extras
-   [Get a custom domain name and use it for your application](https://www.codecademy.com/courses/make-a-website/lessons/setting-up-your-domain/)
-   Set up a CI/CD workflow to automatically deploy your application when the master branch in the repository changes
-   Make your application a progressive web app
-   Create AI Summaries
-   Use semantic analysis for an understanding of overall comments vibe

## Technologies Used
-   HTML
-   CSS OR Tailwind OR Bootstrap
-   JavaScript
-   React
-   Redux
-   Jest/Enzyme (NOTE: support for Enzyme is dead - boo Codecademy - with this project we will instead use RTL)
-   Selenium OR Cypress
-   Git and GitHub
-   Command line and file navigation
-   Wireframing

## Wireframes

[Figma](https://www.figma.com/board/OY5t1bqB4CMDfPDczimGoY/GuardianFiltered?node-id=0-1&node-type=canvas&t=4rabiDCI37lRVq35-0)

## Project Plan
A loose initial plan for the app build:

 - Render non-functional basic desktop and mobile homepages in React, according to the wireframes, without any dynamic React/Redux or testing.
 - Make the app dynamic with React/Redux, start to implement unit/integration tests with Jest/RTL as I go. This means connecting the components for:
	 - **NavBar**, parent to:
		 - Title
		 - *SearchBar*
		 - *FiltersDropdown*
	- **Feed**, parent to: 
		- *SearchResults*, parent to:
			- *ArticleContainer*, parent to:
				- *Article*, parent to:
					- Heading
					- Author
					- Image
					- *ArticlePreview*
					- *Button - GoTo*
					- *Button - Expand*
					- *Button - Comments*
					- *Share*
					- *CommentCount* (displays how many current comments on the article)
		- *FilterResults*, parent to: 
			- "	
	- Footer
	- **Alert** (used to display messages/errors to user)
	
 - Add in search filtering/dropdown category filtering/scrollfeed changes via React/Redux. Further components to be connected:
	- **FiltersDropdown**, parent to:
		- *Filters*, parent to:
			- *Filter*
- Replace mock data by connecting to OpenPlatform API and complete e2e tests with Cypress
- Test PageSpeed performance
- Publish and host app with GitHub Pages
- Add in optional extras if desired/time allows
