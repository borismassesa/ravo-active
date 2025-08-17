'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun 
        size={20} 
        className={`absolute transition-all duration-300 ${
          isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0'
        }`}
      />
      <Moon 
        size={20} 
        className={`absolute transition-all duration-300 ${
          isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
        }`}
      />
    </Button>
  )
}

export default ThemeToggle