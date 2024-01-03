var docData = [
    {
        "title": "General",
        "list": [
            {
                "entry-title": "Getting Started",
                "list": [
                    {
                        "entry-subtitle": "Welcome to Porto eCommerce Template",
                        "entry-subcontent": "<p>It is very nice of you to choose this template as your eCommerce website! <br />We would like to extend our heartfelt thanks to you. </p><p> Our <a href='#' target='_blank'>eCommerce React Template</a> has well-organized, easily understandable files structure, supports superfast data processing, works pretty well on different kinds of browsers, including Chrome, Edge, Firefox, Safari, and so on. On top of those, it provides 40+ demos, categories, products and other pages of fashionable design, fully customizable components. </p>  <p> Before using our template, be sure to check this doc carefully. By collecting various opinions of customers, we’ve made such a nice document to give you clear understanding of the template.</p>  <p> If you can not find answers in documentation or have opinions to develop this Porto Template, feel free to contact us, and we will always be with you and will appreciate your kindness. </p> "
                    }
                ]
            },
            {
                "entry-title": "Features",
                "list": [
                    {
                        "entry-subtitle": "Next.js",
                        "entry-subcontent": "<p>This template is fully converted into <em>Next.js</em>.<br />You can deploy this project on differents servers and also can use SSR(server side rendering) as well as SEO.</p>"
                    },
                    {
                        "entry-subtitle": "GraphQL",
                        "entry-subcontent": "<p>This template use graphQL to fetch data from <em>Apollo Server</em>.By using its cache policy, fetching process become remarkably faster.</p>"
                    },
                    {
                        "entry-subtitle": "Ecommerce AdminPanel",
                        "entry-subcontent": "<p>This template has AdminPanel which is made by React.<br />It imitates CRUD operation of data and process of ecommerce site.</p>"
                    },
                    {
                        "entry-subtitle": "React Hooks",
                        "entry-subcontent": "<p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. A Hook is a special function that lets you “hook into” React features. If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.</p>"
                    },
                    {
                        "entry-subtitle": "React Memo",
                        "entry-subcontent": "<p>React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result. By default it will only shallowly compare complex objects in the props object. If you want control over the comparison, you can also provide a custom comparison function as the second argument.</p>"
                    },
                    {
                        "entry-subtitle": "Redux Saga",
                        "entry-subcontent": "<p>This template implement Saga middleware instead of previous Thunk middleware to use Saga Effects in conjunction with <em>Next.js</em>.</p>"
                    },
                    {
                        "entry-subtitle": "Skeleton & LazyLoad Image",
                        "entry-subcontent": "<p>We use LazyLoad image to make first loading faster.<br />And also use skeleton to show when data is not yet unavailable.</p>"
                    },
                    {
                        "entry-subtitle": "Responsive Design",
                        "entry-subcontent": "<p>Looks great on desktops, laptops, tablets and mobiles.</p>"
                    },
                    {
                        "entry-subtitle": "Fully Customizable",
                        "entry-subcontent": "<p>You can fully customize.You can make your own pages and components by using our products.</p>"
                    },
                    {
                        "entry-subtitle": "Made with sass",
                        "entry-subcontent": "<p>This template is made with sass. Every shop has its' own sass file.</p>"
                    },
                    {
                        "entry-subtitle": "Multi-Browser Support",
                        "entry-subcontent": "<p>This template has multi browser support. It works fine with all browsers including Chrome, IE, Edge, Opera, Firefox, etc…</p>"
                    },
                    {
                        "entry-subtitle": "Built-in Pages",
                        "entry-subcontent": "<p>This template has 40 shop demos, 14 cateogry pages, 12 product pages and other 10 subpages.</p>"
                    },
                    {
                        "entry-subtitle": "Custom HOCs",
                        "entry-subcontent": "<p>We define and use several reuseable custom HOCs in AdminPanel.</p>"
                    }
                ]
            },
            {
                "entry-title": "Files Structure",
                "list": [
                    {
                        "entry-subtitle": "Well-organized and easily understandalble structure",
                        "entry-subcontent": `
                            <p>Porto eCommerce React Template has well-organized, easily understandable and customizable files structure. Once you see it, you will understand at first sight.</p>
                            <p>This project has following files structrue.</p>
                            <ul>
                                <li>
                                    <b class="text-dark">api:</b> Apollo server which is responsible for sending data to client.
                                </li>
                                <li>
                                    <b class="text-dark">shop:</b> Porto Next Template with all 40 demos.
                                </li>
                                <li>
                                    <b class="text-dark">adminpanel:</b> Porto React Stand-alone Admin Panel
                                </li>
                            </ul>
                            <h5>Shop Demo Structure</h4>
                            <table class="table table-bordered mb-4">
                                <thead>
                                    <th width="150">Path</th>
                                    <th>Description</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>.next</code></td>
                                        <td>The .next directory contains automatically generated files when using <strong>next dev</strong> or your build artifacts when using next build.</td>
                                    </tr>
                                    <tr>
                                        <td><code>components</code></td>
                                        <td>The components directory contains your React.js components.</td>
                                    </tr>
                                    <tr>
                                        <td><code>out</code></td>
                                        <td>The out folder dynamically generated when using the <strong>next build</strong> command and includes the generated production ready HTML files and assets.</td>
                                    </tr>
                                    <tr>
                                        <td><code>pages</code></td>
                                        <td>The pages directory contains your application views and routes.</td>
                                    </tr>
                                    <tr>
                                        <td><code>public</code></td>
                                        <td>The public directory is directly mapped to the server root and contains files that likely won't be changed.</td>
                                    </tr>
                                    <tr>
                                        <td><code>store</code></td>
                                        <td>The store directory contafins your Redux-Saga files.</td>
                                    </tr>
                                    <tr>
                                        <td><code>utils</code></td>
                                        <td>The utils directory contains the utilities in the application and data for menus and settings.</td>
                                    </tr>
                                    <tr>
                                        <td><code>next.config.js</code></td>
                                        <td>The default configuration can be overwritten with the next.config.js file.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.env.development</code></td>
                                        <td>Environment variables that will be used in development mode are defined here.</td>
                                    </tr>
                                    <tr>
                                        <td><code>.env.production</code></td>
                                        <td>Environment variables that will be used in production mode are defined here.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5>AdminPanel Structure</h4>
                            <table class="table table-bordered">
                                <thead>
                                    <th>Path</th>
                                    <th>Description</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>config</code></td>
                                        <td>Configuration files of project</td>
                                    </tr>
                                    <tr>
                                        <td><code>public</code></td>
                                        <td>Public files</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>assets</code></td>
                                        <td>Public assets for AdminPanel</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>mock-server</code></td>
                                        <td>Images and data for mock-server</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>index.html</code></td>
                                        <td>Index page of AdminPanel</td>
                                    </tr>
                                    <tr>
                                        <td><code>scripts</code></td>
                                        <td>JS files to run and build this project</td>
                                    </tr>
                                    <tr>
                                        <td><code>src</code></td>
                                        <td>Source Code</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>api</code></td>
                                        <td>APIs to fetch data from mock-server</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>components</code></td>
                                        <td>React Components</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>common</code></td>
                                        <td>Header, Sidebar, Breadcrumb</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>features</code></td>
                                        <td>Reusable components</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>hoc</code></td>
                                        <td>Custom HOCs</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>pages</code></td>
                                        <td>Pages</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>partials</code></td>
                                        <td>Partial components</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-5"><code>layout.jsx</code></td>
                                        <td>Layout Component</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>routes</code></td>
                                        <td>Routes for navigation</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>utils</code></td>
                                        <td>It contains utilities, constants, animations and menu-data</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-3"><code>index.js</code></td>
                                        <td>Entry point in React</td>
                                    </tr>
                                </tbody>
                            </table>
                        `
                    }
                ]
            },
            {
                "entry-title": "Dependencies",
                "list": [
                    {
                        "entry-subtitle": "Shop Demos",
                        "entry-subcontent": `
                            <p>Modules we used in shop demos are like that.</p>
                            <ul>
                                <li>"@apollo/react-hooks": "^4.0.0"</li>
                                <li>"@apollo/react-ssr": "^4.0.0"</li>
                                <li>"@emotion/core": "^11.0.0"</li>
                                <li>"@emotion/react": "^11.4.0"</li>
                                <li>"apollo-boost": "^0.4.9"</li>
                                <li>"google-map-react": "^2.1.9"</li>
                                <li>"graphql": "^15.5.0"</li>
                                <li>"graphql-tag": "^2.12.4"</li>
                                <li>"js-cookie": "^2.2.1"</li>
                                <li>"rc-tree": "^4.1.1"</li>
                                <li>"next": "^10.2.3"</li>
                                <li>"next-apollo": "^5.0.4"</li>
                                <li>"next-redux-saga": "^4.1.2"</li>
                                <li>"next-redux-wrapper": "2.1.0"</li>
                                <li>"react": "17.0.2"</li>
                                <li>"react-anchor-link-smooth-scroll": "^1.0.12"</li>
                                <li>"react-awesome-reveal": "^3.7.2"</li>
                                <li>"react-countdown": "^2.3.2"</li>
                                <li>"react-dom": "17.0.2"</li>
                                <li>"react-helmet": "^6.1.0"</li>
                                <li>"react-image-lightbox": "^5.1.1"</li>
                                <li>"react-image-magnifiers": "^1.4.0"</li>
                                <li>"react-input-range": "^1.3.0"</li>
                                <li>"react-lazy-load-image-component": "^1.5.1"</li>
                                <li>"react-modal": "^3.14.2"</li>
                                <li>"react-owl-carousel2": "^0.3.0"</li>
                                <li>"react-redux": "^7.2.4"</li>
                                <li>"react-slide-toggle": "^0.3.5"</li>
                                <li>"react-sticky-box": "^0.9.3"</li>
                                <li>"react-tabs": "^3.2.2"</li>
                                <li>"react-toastify": "^7.0.4"</li>
                                <li>"redux": "^4.1.0"</li>
                                <li>"redux-persist": "^6.0.0"</li>
                                <li>"react-saga": "^1.1.3"</li>
                                <li>"sass": "^1.34.1"</li>
                            </ul>
                        `
                    },
                    {
                        "entry-subtitle": "Admin Panel",
                        "entry-subcontent": `
                            <p>The list of modules used in adminpanel is like that.</p>
                            <ul>
                                <li>"@babel/core": "7.1.0"</li>
                                <li>"@svgr/webpack": "2.4.1"</li>
                                <li>"axios": "0.19.0"</li>
                                <li>"babel-core": "7.0.0-bridge.0"</li>
                                <li>"babel-jest": "23.6.0"</li>
                                <li>"babel-loader": "8.0.4"</li>
                                <li>"babel-plugin-named-asset-import": "^0.2.3"</li>
                                <li>"babel-preset-react-app": "^6.1.0"</li>
                                <li>"bfj": "6.1.1"</li>
                                <li>"case-sensitive-paths-webpack-plugin": "2.1.2"</li>
                                <li>"chalk": "2.4.1"</li>
                                <li>"css-loader": "1.0.0"</li>
                                <li>"date-format-parser": "^0.2.5"</li>
                                <li>"eslint": "5.6.0"</li>
                                <li>"eslint-config-react-app": "^3.0.8"</li>
                                <li>"eslint-loader": "2.1.1"</li>
                                <li>"eslint-plugin-flow-type": "2.50.1"</li>
                                <li>"eslint-plugin-import": "2.14.0"</li>
                                <li>"eslint-plugin-jsx-ally": "6.1.2"</li>
                                <li>"eslint-plugin-react": "7.11.1"</li>
                                <li>"file-loader": "2.0.0"</li>
                                <li>"fork-ts-checker-webpack-plugin-alt": "0.4.14"</li>
                                <li>"fs-extra": "7.0.0"</li>
                                <li>"html-webpack-plugin": "4.0.0-alpha.2"</li>
                                <li>"identity-obj-proxy": "3.0.0"</li>
                                <li>"jest": "23.6.0"</li>
                                <li>"jest-pnp-resolver": "1.0.1"</li>
                                <li>"jest-resolve": "23.6.0"</li>
                                <li>"mini-css-extract-plugin": "0.4.3"</li>
                                <li>"optimize-css-assets-webpack-plugin": "5.0.1"</li>
                                <li>"pnp-webpack-plugin": "1.1.0"</li>
                                <li>"postcss-flexbug-fixes": "4.1.0"</li>
                                <li>"postcss-loader": "3.0.0"</li>
                                <li>"postcss-preset-env": "6.0.6"</li>
                                <li>"postcss-safe-parser": "4.0.1"</li>
                                <li>"rc-tree": "^4.1.1"</li>
                                <li>"react": "17.0.2"</li>
                                <li>"react-apexcharts": "^1.3.7"</li>
                                <li>"react-app-polyfill": "^0.1.3"</li>
                                <li>"react-awesome-reveal": "^3.3.1"</li>
                                <li>"react-bootstrap": "^1.0.0-beta.10"</li>
                                <li>"react-color-palette": "^4.1.0"</li>
                                <li>"react-custom-scrollbars": "^4.2.1"</li>
                                <li>"react-datepicker": "^2.8.0"</li>
                                <li>"react-dev-utils": "^6.1.1"</li>
                                <li>"react-dom": "17.0.2"</li>
                                <li>"react-draft-wyswig": "1.14.6"</li>
                                <li>"react-dropzone": "10.1.7"</li>
                                <li>"react-helmet": "^5.2.1"</li>
                                <li>"react-image-lightbox": "^5.1.1"</li>
                                <li>"react-lazy-load-image-component": "^1.5.0"</li>
                                <li>"react-modal": "^3.11.1"</li>
                                <li>"react-range": "^1.8.3"</li>
                                <li>"react-router-dom": "^4.3.1"</li>
                                <li>"react-router-scroll-4": "^1.0.0-beta.2"</li>
                                <li>"react-scripts": "^2.1.8"</li>
                                <li>"react-select": "^3.1.1"</li>
                                <li>"react-slide-toggle": "^0.1.13"</li>
                                <li>"react-table": "^6.10.0"</li>
                                <li>"react-tabs": "^2.3.1"</li>
                                <li>"react-text-mask": "^5.4.3"</li>
                                <li>"react-toastify": "^7.0.4"</li>
                                <li>"react-owl-carousel2": "^0.3.0"</li>
                                <li>"resolve": "1.8.1"</li>
                                <li>"style-loader": "0.23.0"</li>
                                <li>"terser-webpack-plugin": "1.1.0"</li>
                                <li>"url-loader": "1.1.1"</li>
                                <li>"webpack-dev-server": "^3.10.3"</li>
                                <li>"webpack-manifest-plugin": "2.0.4"</li>
                                <li>"workbox-webpack-plugin": "3.6.3"</li>
                            </ul>
                        `
                    }
                ]
            }
        ]
    },
    {
        "title": "How To",
        "list": [
            {
                "entry-title": "How To run",
                "list": [
                    {
                        "entry-subtitle": "Start Building",
                        "entry-subcontent": "<p>To build, you need to take these following steps.</p > "
                    },
                    {
                        "entry-subtitle": 'Installation',
                        "entry-subcontent": "<p>Before going further, you have to install Node.JS and NPM.<br />\
                                    <strong>1. Install Node.js and NPM</strong> : You can download latest Node.js from <a href='https://nodejs.org/en/download/' target='_blank'>https://nodejs.org/en/download/</a> and install it on your system. NPM comes bundled with Node.js<br />\
                                    <strong>2. Install npm packages</strong> : In terminal go to your project root directory and run npm install command, it will download all the dependencies inside of node_modules folder.</p>"
                    },
                    {
                        "entry-subtitle": "Running Apollo server",
                        "entry-subcontent": `<p>In order to get data in frontend, you should run apollo server first. In <strong>api</strong> foder, you could find server.js, which contains configuration for running api.
                        <br/>Run <strong>npm start</strong> command to run dev server and access <code>http://localhost:4000/</code> to run your app/project on browser. The app will automatically reload if you change any of the source files.
                        <br/>As <strong>npm start</strong> runs watch command which detects any change in project files so it will automatically reload your app on browser if you make changes in files.
                        </p>`
                    },
                    {
                        "entry-subtitle": "Running Shop Development server",
                        "entry-subcontent": `<p>Run <strong>next</strong> command to run dev server and access <code>http://localhost:3000/</code> to run your app/project on browser. The app will automatically reload if you change any of the source files.
                        <br>As <strong>next</strong> runs watch command which detects any change in project files so it will automatically reload your app on browser if you make changes in files.</p>`
                    },
                    {
                        "entry-subtitle": "Production Building",
                        "entry-subcontent": `<p>The easiest way to deploy Next.js to production is to use the <strong>Vercel platform</strong> from the creators of Next.js. Vercel is an all-in-one platform with Global CDN supporting static &amp; Jamstack deployment and Serverless Functions.
                        To get more information, please refer to <a href="https://nextjs.org/docs/advanced-features/static-html-export" class="active"><code>https://nextjs.org/docs/advanced-features/static-html-export</code></a>.
                        However, you could generate html files. <br><strong>next export</strong> allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server. <strong>next export</strong> works by prerendering all pages to HTML.</p>`
                    },
                    {
                        "entry-subtitle": "Running AdminPanel",
                        "entry-subcontent": `<p>Run <strong>npm start</strong> command to run dev server and access <code>http://localhost:5000/</code> to run your app/project on browser. The app will automatically reload if you change any of the source files.
                        <br/>As <strong>npm start</strong> runs watch command which detects any change in project files so it will automatically reload your app on browser if you make changes in files.</p>`
                    }
                ]
            },
            {
                "entry-title": "How To Customize",
                "list": [
                    {
                        "entry-subtitle": "",
                        "entry-subcontent": `
                            <p>While developing a website using our template, you will need some modification to adjust your web to
                            your idea.
                            Making a new component with existing ones will be questionable for users who have a first touch in our
                            template.
                            We are going to give some examples to have you understand about our components.</p>
                        `
                    },
                    {
                        "entry-subtitle": "Import component",
                        "entry-subcontent": `
                            <p>Importing a component is the first step in customizing.Product is the most friquently used
                            component.<br>
                            Porto provide you with several types of products that are used in various layouts.<br>
                            Even though we've accommodated suitable products for each demo but you may have better idea about
                            it.<br>
                            If you wanna change a product type, above of all, import it like as following.<br>
                            <prev><code class="bg-transparent">import ProductTwo from '~/components/features/product/product-two';</code>
                            </prev></p>
                        `
                    },
                    {
                        "entry-subtitle": "Mapping Props",
                        "entry-subcontent": `
                            <p>The next step after importing component is sending props to component.<br>
                            Remember that the props you are going to send must be already defined in the component before you do
                            it.<br>
                            And Prop names should always use camelCase during declaration, but kebab-case in templates.<br>
                            Also misusing props will bring about issues and even fatal errors. So you should check props carefully
                            to prevent failure.<br></p>
                        `
                    }
                ]
            },
            {
                "entry-title": "How To Change Data",
                "list": [
                    {
                        "entry-subtitle": "Change Product Data",
                        "entry-subcontent": `<p class="mb-1">Since we used apollo server, you can find product data in api/src folder. Here, all data which is needed in frontend are defined. You can customize each product or post data.
                        Let's take one product for example.</p>
                <samp>{
    "id": 1,
    "name": "Women Casual Bag Spring",
    "slug": "women-casual-bag-spring",
    "price": null,
    "sale_price": null,
    "short_description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "stock": "54",
    "ratings": 5,
    "reviews": 1,
    "sale_count": 0,
    "is_new": true,
    "is_hot": null,
    "is_out_of_stock": null,
    "release_date": null,
    "until": null,
    "variants": [
        {
            "price": 101,
            "sale_price": null,
            "size": {
                "name": "Extra Large",
                "size": "XL"
            },
            "color": {
                "name": "black",
                "color": "#000000"
            }
        },
        {
            "price": 108,
            "sale_price": null,
            "size": {
                "name": "Medium",
                "size": "M"
            },
            "color": {
                "name": "black",
                "color": "#000000"
            }
        },
        {
            "price": 105,
            "sale_price": null,
            "size": {
                "name": "Small",
                "size": "S"
            },
            "color": {
                "name": "red",
                "color": "#ab6e6e"
            }
        }
    ],
    "large_pictures": [
        {
            "width": 800,
            "height": 800,
            "url": "/uploads/product_4_2_df45e02348.jpg"
        },
        {
            "width": 800,
            "height": 800,
            "url": "/uploads/product_4_1_4000b10b66.jpg"
        }
    ],
    "pictures": [
        {
            "width": 300,
            "height": 300,
            "url": "/uploads/product_4_2_300x300_8738f35e14.jpg"
        },
        {
            "width": 300,
            "height": 300,
            "url": "/uploads/product_4_1_300x300_b9fa3603f7.jpg"
        }
    ],
    "small_pictures": [
        {
            "width": 150,
            "height": 150,
            "url": "/uploads/product_4_2_150x150_eaa6803746.jpg"
        },
        {
            "width": 150,
            "height": 150,
            "url": "/uploads/product_4_1_150x150_7254d0c96b.jpg"
        }
    ],
    "categories": [
        {
            "name": "Dress",
            "parent": null,
            "slug": "dress"
        },
        {
            "name": "Blouse",
            "parent": null,
            "slug": "blouse"
        },
        {
            "name": "Clothing",
            "parent": "Dress",
            "slug": "clothing"
        }
    ],
    "tags": [],
    "brands": []
}</samp>

<p class="mb-1">A post data is like the following.</p>
<samp>{
    "id": 1,
    "title": "Top New Collection",
    "slug": "top-new-collection",
    "author": "John Doe",
    "date": "2020-09-07",
    "comments": 0,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus sem. Aenean pretium convallis lorem, sit amet dapibus ante mollis a. Integer bibendum interdum sem, eget volutpat purus pulvinar in. Sed tristique augue vitae sagittis porta. Phasellus ullamcorper, dolor suscipit mattis viverra,",
    "type": "image",
    "video": false,
    "picture": [
        {
            "url": "/uploads/post1_3b51e2fd18.jpg",
            "width": 265,
            "height": 198
        }
    ],
    "small_picture": [],
    "categories": [
        {
            "name": "Fashion",
            "slug": "fashion"
        },
        {
            "name": "Model",
            "slug": "model"
        }
    ]
}</samp>`
                    },
                    {
                        "entry-subtitle": "Change Menu Data",
                        "entry-subcontent": `<p>Porto saved the data of mobile and main menu items in <em>utils/data/menu.js</em>.<br/>
                        If you wanna change the title of the menu item, then change the title.
                        <pre>
    <code class="bg-transparent">{
        "title": "Fullwidth Banner",
        "url": "/shop/full-width"
    }</code></pre>
                        </p>`
                    },
                    {
                        "entry-subtitle": "Change Carousel Setting",
                        "entry-subcontent": `<p>Porto React used OwlCarousel for carousel. In order to give setting to slider, you should customize it as you want.<br/>
                        <pre>
    <code class="bg-transparent">{
        loop: false,
        margin: 20,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    }</code></pre>
                        </p>`
                    }
                ]
            },
            {
                "entry-title": "How To Change Style",
                "list": [
                    {
                        "entry-subtitle": "Modify SASS",
                        "entry-subcontent": `
                            <p class="mb-6">Since Next support importing scss, you could get the benefit of it.
                            Pls open the <code>public/sass/demo</code>, add the scss code you want. <code>demo-config.scss</code> is typically used to change the configuration.
                            <br>  Thanks to the hot reloading, you can see the style changes immediately.
                            </p>
                        `
                    },
                    {
                        "entry-subtitle": "Example: Base Header variables",
                        "entry-subcontent": `
                            <p>Default Configuration variable for header in <code>sass/base/_header.scss</code>.</p>
                            <samp>@include set-default(
(
    header: (
        color: false,
        link-color: false,
        link-active-color: false,

        top: (
            padding-top: false,
            padding-bottom: false,
            color: false,
            background: false,
            border-bottom: false,
            font-size: false,
            font-weight: false,
            letter-spacing: false,
        ),
        middle: (
            padding-top: false,
            padding-bottom: false,
            color: false,
            background: false,
            border-bottom: false,
            font-size: false,
            font-weight: false,
            letter-spacing: false,
        ),
        bottom: (
            padding-top: false,
            padding-bottom: false,
            color: false,
            background: false,
            border-bottom: false,
            font-size: false,
            font-weight: false,
            letter-spacing: false,
        ),
        logo: (
            max-width: 97px,
            max-width-mobile: false,
        ),
        separator: (
            color: rgba(0,0,0,.04),
            space: 10px
        ),
        social-icon: (
            font-size: 13px,
            size: 2.6rem,
            color: false,
            space: 2px
        ),
        top-notice: (
            padding: .9rem 2rem 1rem,
            font-size: 1.3rem,
            link-background: #151719
        ),
        icon: (
            size: 2.7rem,
            space: 2.2rem,
            space-mobile: 1.2rem,
        )
    )
)
)</samp>
                        `
                    },
                    {
                        "entry-subtitle": "Example: Customize header",
                        "entry-subcontent": `
                            <p>Following codes are used to customize demo-4's vairable <code>sass/demo/_demo-variables.scss</code>.</p>
                            <ul class="mb-1">
                                <li>If you want to override config, please use set mixin and write variable.</li>
                                <li>If you want to remove unnecessary css code, please set false value.</li>
                            </ul>
                            <samp>// Demo 4 Variables
    @include set(
        header: (
            middle: (
                color: $primary-color-dark
            ),
            logo: (
                max-width: 111px,
                max-width-mobile: 90px
            ),
            top-notice: (
                link-background: #0075af
            ),
            search: (
                height: 40px,
                divider: 1px solid #fff,
    
                border: (
                    width: 5px,
                    color: $primary-color
                ),
                btn: (
                    min-width: 40px
                ),
                select: (
                    padding-left: 15px,
                    padding-right: 14px
                )
            ),
            separator: (
                space: 14px
            ),
            social-icon: (
                space: 3px
            )
        ),
        ...
    )
                        </samp>
                        `
                    },
                    {
                        "entry-subtitle": "Import CSS",
                        "entry-subcontent": `
                        <p>Porto supports importing css as well as sass.
                        You could make your own css file.<br> Then, what you have to do is to import it. Please open document.js file, and insert css file url in underlying part. Like the below.
                        </p><samp>&lt;link rel="stylesheet" type="text/css" href="vendor/bootstrap.min.css" /&gt;
&lt;link rel="stylesheet" type="text/css" href="vendor/fontawesome-free/css/all.min.css" /&gt;
&lt;link rel="stylesheet" type="text/css" href="vendor/simple-line-icons/css/simple-line-icons.min.css" /&gt;</samp>
                        `
                    }
                ]
            },
            {
                "entry-title": "How To Change Query",
                "list": [
                    {
                        "entry-subtitle": "",
                        "entry-subcontent": `<p>All queries can be found in <code>server/queries.js</code>. You can customize each query to fetch data from <strong>Apollo Server</strong>.</p>`
                    },
                    {
                        "entry-subtitle": "Example",
                        "entry-subcontent": `<p>
                            Query that fetch data for index page in Demo4 is like this.</p>
                            <samp>
    ...
    export const GET_HOME_DATA = gql'
    query indexData($productsCount: Int, $postsCount: Int) {
        specialProducts(demo: DEMO, featured: true, bestSelling: true, topRated: true, latest: true, count: $productsCount) {
            featured {
                ...ProductSimple
            }
            bestSelling {
                ...ProductSimple
            }
            topRated {
                ...ProductSimple
            }
            onSale {
                ...ProductSimple
            }
            latest {
                ...ProductSimple
            }
        }
        posts(demo: DEMO, to: $postsCount) {
            data {
                title
                slug
                date
                comments
                content
                picture {
                    url
                    width
                    height
                }
                video
            }
        }
    }
    PRODUCT_SIMPLE
'</samp>
                        <p>Now you can add or remove subqueries to fetch data as you like.</p>
                        <samp>
    ...
    products(demo: DEMO, from: 0, to: $productsCount) {
        data {
            ...ProductSimple
        }
    }
    ...
</samp>
`
                    }
                ]
            }
        ]
    },
    {
        "title": "FAQs",
        "list": [
            {
                "entry-title": "FAQs",
                "list": [
                    {
                        "entry-subtitle": "What is main concept of Next.js?",
                        "entry-subcontent": `<p>Next.js is built around the concept of pages. A page is a <code>React Component</code> exported from a <code>.js</code>, <code>.jsx</code>, <code>.ts</code>, <code>.tsx</code> file in the <code>pages</code> directory.
                        Pages are associated with a route based on their file name. For example <code>pages/about.js</code> is mapped to <code>/about</code>.
                        </p>`
                    },
                    {
                        "entry-subtitle": "Why is apollo-client used?",
                        "entry-subcontent": `<p>Data management shouldn't have to be so difficult indeed! Apollo is a great charm for intelligent caching and declarative approach to data fetching, and it can help you iterate faster while writing less code.
                        </p>`
                    },
                    {
                        "entry-subtitle": "Which script did you use?",
                        "entry-subcontent": `<p>We know that you'll be much curious about which script our templated based on. Porto used Javascript.
                        </p>`
                    },
                    {
                        "entry-subtitle": "What is the purpose of using hook?",
                        "entry-subcontent": `<p>It's hardly news that replacing class component with functional component is a trend. Because functional component has some advantages than class component. So now developers use functional components rather than class component. But functional component hasn't any lifecycles or setState that are must be used in React developing. Hook supports lifecycles and other same effects that class component use to functional component. It's the main reason why we used hook.</p>`
                    },
                    {
                        "entry-subtitle": "Which middleware did you use for Redux?",
                        "entry-subcontent": `We've used redux-saga since it has effects when actions are dispatched to the store.`
                    },
                    {
                        "entry-subtitle": "What are queris for?",
                        "entry-subcontent": `<p>In order to use apollo server & client, you should use queries for all requests. Simply queries are "patterns" of server request.</p>`
                    },
                    {
                        "entry-subtitle": "Are there any useful HOCs?",
                        "entry-subcontent": `<p>There are several <strong>HOC</strong>s in AdminPanel. You can easily use and customize them.</p>`
                    }
                ]
            }
        ]
    },
    {
        "title": "Thank you",
        "list": [
            {
                "entry-title": "Thank you",
                "list": [
                    {
                        "entry-subtitle": "We are so glad to provide you our products.",
                        "entry-subcontent": "<p>We don't know how to thank you for using our templetes.<br />If you are satisfied with our product, pls rate us.</p>"
                    }
                ]
            }
        ]
    }
]