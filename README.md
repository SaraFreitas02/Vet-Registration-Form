# Vet Registration Form
This project consists of a simple yet engaging registration form for an imaginary veterinary clinic.

- [Goal](#goal)
- [Guidelines](#guidelines)
- [Project Structure](#project-structure)
- [Main Features](#main-features)
- [Areas for Improvement](#areas-for-improvement)
- [Lighthouse Report](#lighthouse-report)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Attributions](#attributions)
- [License](#license)

## Goal
The main goal of this project is to gain hands-on experience and improve practical skills. For the web app itself, the objective is to create a registration form for an imaginary veterinary clinic that is simple, intuitive, and professional, while also being visually appealing and engaging.

## Guidelines
This project is a self-imposed challenge to test the knowledge I’ve gathered so far while also pushing myself to learn more. To achieve this, I’ve set the following guidelines:

- **No Frameworks or Libraries**: 

The project is to be created exclusively through traditional web development, meaning no frameworks or libraries—whether from JavaScript or CSS—are allowed. This includes tools like jQuery, React, Angular, Bootstrap, and others. Also, only pure CSS and vanilla JavaScript are permitted, so preprocessors like SCSS, LESS, Babel, and TypeScript must not be used. However, modern CSS techniques like Flexbox and Grid are permitted, allowing for more responsive and efficient designs. The main goal behind these restrictions is to ensure the focus is kept on mastering the fundamentals so that the understanding of core concepts and problem-solving skills can be improved, ultimately creating a strong coding knowledge base.

- **All-Devices Compatibility**: 

The web app should be designed to be fully responsive and adaptable across all devices—desktop, tablet, and mobile. This ensures the layout and functionality are consistent and user-friendly on any screen size while allowing me to practice and refine my skills in creating responsive designs.

- **No Perfectionism**: 

Completion is more important than perfection. The project will never be flawless, and there will always be room for improvement—and that’s okay! The goal is to finish it rather than get caught up in endless cycles of updates and refinements that often create more problems than they solve. That said, it’s still fine to revisit and update it occasionally as I learn and grow.

## Project Structure
- **index.html:** The primary HTML file that defines the web app structure.
- **style.css:** The CSS file responsible for styling the web app and form elements.
- **index.js:** The JavaScript file handling form interactions and dynamic inputs.
- **LICENSE:** Responsible for informing you about the license this web app is under.
- **README.md:** This file informs you about the web app's licensing.

## Main Features
- **Responsive Layout:** The web app adapts to the screen size of the user's device—either through subtle changes like the scaling of elements or through a slightly different layout. The main difference is in the display of the header menu, which is presented as a navigation bar on desktop and tablet devices and as a dropdown menu—triggered by a button on the right side of the header—on mobile devices.
![Untitled design (3)](https://github.com/user-attachments/assets/7fce166b-8d93-48d3-9305-4a93dcfd55a6)

- **Piece-by-Piece Form:** The form is divided into three different parts: owner information, pet information, and account creation. The 'Next' button triggers the change between each section, making the form less overwhelming for the user.
![Untitled design (4)](https://github.com/user-attachments/assets/f14ed04d-7abc-43ad-ba21-a906a2fed0f2)


- **Form Feedback:** To make the completion of this form a bit more engaging and dynamic, some interactive feedback features were implemented:
    - Inputs’ borders turn green when they are valid and red when invalid.
    - A warning message is displayed when the two password inputs’ values do not match, and the form is not submitted.
![Untitled design (5)](https://github.com/user-attachments/assets/9900f0ce-256f-43db-8c38-11e63fde5d58)


- **Password Visibility Toggle:** It is possible to toggle the visibility of the password through an icon displayed the right side of the respective inputs. To make it a bit more engaging, the icon also changes depending on the visibility of the password.
![Untitled design (6)](https://github.com/user-attachments/assets/d3e19583-2e23-41e7-a1f9-e04363ea404d)


## Areas for Improvement
- **Input Feedback:** The change of the inputs' border color depending on their validity needs some refinements since it doesn’t always work.
- **Empty Required Inputs:** The form submits even when empty inputs that are required are left blank. The future goal is to only allow the change to the next part of the form if the current one is correctly filled in.
- **Dropdown Menu Design:** The dropdown menu feels out of place, very likely due to its design. It could be improved.
- **Form Display Error:** When the screen height is below 350px, the form overlaps with the header instead of staying properly within the main content area.
- **Fluidity:** The transition between form sections feels harsh and lacks smoothness. Adding a simple animation, such as a fade-in effect, would make the experience more engaging and enhance the overall fluidity of the web app.

## Lighthouse Report
These are the Lighthouse ratings checked to assess the quality and optimization of the web app.

| Metric            | Score |
|-------------------|-------|
| **Performance**   | 100   |
| **Accessibility** | 100   |
| **SEO**           | 100   |
| **Best Practices**| 100   |

These scores reflect the project’s commitment to high standards in performance, accessibility, SEO, and overall best practices.
![MOBILE](https://github.com/user-attachments/assets/b17a3741-dfd2-4ccb-a068-1a91e6d3a725)

## Installation Guide
You can access the web app through its [live deployment](https://sarafreitas02.github.io/Vet-Registration-Form/) or locally by downloading the repository:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SaraFreitas02/Vet-Registration-Form
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Vet-Registration-Form
    ```

3. **Open the project in your preferred code editor**:
    ```bash
    code .
    ```

4. **Open the `index.html` file in your browser**:
    You can either double-click the file in your file explorer or use a live server extension if you have one installed in your code editor.

## Usage Instructions
- Open the web app in your browser (refer to [Installation Guide](#installation-guide) for help).
- Explore each of the features by clicking the buttons, filling in the inputs, and resizing the window.

## Attributions
- **Icons**:  
  Copyright 2024 Fonticons, Inc.

  The icons used in this project are the property of [Font Awesome](https://fontawesome.com) Free 6.6.0 by @fontawesome. Refer to its respective [LICENSE](https://fontawesome.com/license/free) for more information.  
  There were no changes made to them besides resizing and color adjustments.

- **Background Image:**  
  The background image used in this web app is the property of [David Taffet](https://unsplash.com/@invisibleman_photography), available on [Unsplash](https://unsplash.com/) under the [Unsplash License](https://unsplash.com/license).  
  There were no changes made besides the conversion into a webp file.

## License
This project is open-source and available under the [MIT License](LICENSE).

### MIT License
This project is licensed under the MIT License, which means you are free to use, modify, and distribute the code as long as you include the original license text.

### Disclaimer
Please be aware that while this project is provided under the MIT License, it is your responsibility to ensure that your usage complies with all applicable laws and regulations. The project is a work in progress and may have limitations or issues.

Feel free to use this project for your needs or contribute to its development.

For more details, refer to the [MIT License](LICENSE) file in this repository.
