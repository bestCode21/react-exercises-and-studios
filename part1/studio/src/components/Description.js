import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    //Declare the local variables containing the Author's information
    const authorLink = "https://www.allrecipes.com/crockpot-italian-chicken-recipe-7501402";
    const authorPhoto = "https://images-ext-1.discordapp.net/external/pDYnx7tMn_nrrqlrgckZQXRI6kEVMjCw8uUuqn6V89Y/%3Furl%3Dhttps%253A%252F%252Fcam-image-store.accountservices.meredithcorp.io%252Fe476ed4c99fb133b62c7efe7e8b74ba9a60b84f8%26w%3D320%26h%3D320%26c%3Dsc%26poi%3Dface%26q%3D60%26orient%3Dtru/https/imagesvc.meredithcorp.io/v3/mm/image?width=640&height=640";
    const authorName = "LeAnn Haas Gabriel";

    // Return JSX representing the author information
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}> allrecipes </a> 
           </div>
        </div>
     );

    

}