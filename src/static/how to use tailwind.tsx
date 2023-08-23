import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import 'twin.macro'

//BELOW ARE THE EXAMPLES OF USING TAILWIND.CSS INSIDE .TSX files.

//https://github.com/ben-rogerson/twin.macro

// https://stackblitz.com/github/ben-rogerson/twin.examples/tree/master/webpack-emotion-typescript?file=src%2FApp.tsx

//https://www.npmjs.com/package/twin.macro



import "../styles/global.css"
import * as styles from "../components/Layout"

//twin.macro example my component
// const Input = () => <input tw="border hover:border-black" />

//styled component example : <NeuWrapper></NeuWrapper>
const NeuWrapper = styled.div`
  margin-bottom: 2rem;
  background: bisque;
`

//style example
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

//USAGE:
// <main style={pageStyles}>

// <main ClassName={styles.h1}>