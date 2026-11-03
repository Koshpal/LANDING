/* Dummy content switch.
   Dummy proof, people, articles and downloads are shown by default so the
   site can be reviewed as a whole. Each one carries a visible "Dummy" badge.
   Build with VITE_HIDE_DUMMY=true to remove all of it (production). */
export const SHOW_DUMMY = import.meta.env.VITE_HIDE_DUMMY !== "true";
