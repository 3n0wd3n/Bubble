# Bubble

Presentational web for new social network app

## Technical

Technical decision that need to be considered regards to animation

    viewport={{ once: true, amount: 0.3 }} -> viewport={{ false: true, amount: 0.3 }}

## TODO

- Take a look on animation once again - they are looking clumsy
- Make animation of the images - they could be in motion from Figmotion
- Discuss with Dominik if he likes more aligned icons and text in the "Why would you need another social network" section
- Discuss with Dominik which pages we should prepare (FAQs, Money Plan, Page for advertisers)
- Link our app to socials
- Try different look for "Download section"
- Make components from "Usage Section"

## General setup for new component

    "use client";
    import Image from "next/image";
    import Link from "next/link";
    import styles from "./[NAME].module.css";
    import { motion } from "framer-motion";

    export default function [NAME]({ [PARAMS] }) {
        return (
            <></>
        )
    }
