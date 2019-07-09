import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'
import { fontSizes, colors, grid, breakpoints } from '../utils/variables'
import Header from '../components/Header'

const Layout = ({ children }) => {
    const {title, description} = useSiteMetadata()
    return (
        <>
            <Global styles={css`

                /* --------------------------------------------- */
                /* ----- Basic Setup ----- */
                /* --------------------------------------------- */

                *,
                *::before,
                *::after {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }

                html {
                    font-size: 62.5%;

                    @media(max-width: ${breakpoints.md}) {
                        font-size: 60.5%;
                    }

                    @media(max-width: ${breakpoints.sm}) {
                        font-size: 59.5%;
                    }
                }

                body {
                    font-size: ${fontSizes.default};
                    color: ${colors.textPrimary};
                    font-family: 'Cera Pro', sans-serif;
                    line-height: 1.4;
                }

                section {
                    padding: 6rem 0;
                }

                /* --------------------------------------------- */
                /* ----- Headlines and Paragraphs ----- */
                /* --------------------------------------------- */

                h1,
                h2,
                h3,
                h4 {
                    font-family: 'Playfair Display', serif;
                    line-height: 1.1;
                }

                h1 {
                    font-size: ${fontSizes.medium};
                    margin-bottom: 3.2rem;
                }

                h2 {
                    font-size: ${fontSizes.large};
                    margin-bottom: 1.2rem;
                }

                h3 {
                    font-size: 2.3rem;
                }

                /* --------------------------------------------- */
                /* ----- Layout Helpers ----- */
                /* --------------------------------------------- */

                .row {
                    margin: 0 auto;
                    width: 90%;
                    max-width: ${grid.maxWidth};
                }

                /* --------------------------------------------- */
                /* ----- Buttons ----- */
                /* --------------------------------------------- */

                .btn {
                    display: inline-block;
                    padding: 1.4rem 3rem;
                    border: 1px solid;
                    text-decoration: none;
                    color: ${colors.textPrimary};
                    border-radius: 3px;
                }

                /* --------------------------------------------- */
                /* ----- Borders and Shadows ----- */
                /* --------------------------------------------- */

                .outline-left {
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -2.5rem;
                        display: block;
                        background: ${colors.purple};
                        width: 8px;
                        height: 105%;
                    }
                }

            `}/>
            <Helmet>
                <html lang='en'/>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap" rel="stylesheet" />
                <meta name='description' content={description}/>
            </Helmet>
            <Header />
             <main role="main">
                {children}
             </main>
        </>
    )
}

export default Layout