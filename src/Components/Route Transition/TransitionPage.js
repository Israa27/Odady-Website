import React from 'react'
import { motion } from 'framer-motion'
export default function TransitionPage({children}) {
  return (
    <motion.div 
    initial={{translateX:0}}
    animate={{translateX:1}}
    exit={{translateX:0}}
    transition={{duration:1 }}
    >
       {children}
    </motion.div>
  )
}
