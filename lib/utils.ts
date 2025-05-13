import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const settings = {
  companyName: "Krestdev"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPageTitle(title?:string){
  if(!title) return `${settings.companyName}`
  return `${settings.companyName} - ${title}`
}