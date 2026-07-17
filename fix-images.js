// Script to document missing images and their fallbacks
// Run this in the browser console or include in the page

const missingImages = {
    '694275dd6d937a230538c39a_menu.png': 'icon-menu.png',
    '694275e3f84113c50d621545_close.png': 'icon-close.png',
    '694a4b3ef08555f69c61276e_1.avif': 'avatar-1.avif',
    '694a4b3ef08555f69c612770_2.avif': 'avatar-2.avif',
    '694a4b3ef08555f69c612772_3.avif': 'avatar-3.avif',
    '694a4b3ef08555f69c61276d_star.svg': 'star.svg',
    '686e4a86d9f790183a6d8834_Vector.png': 'vector.png',
    '694a532187474f170c627011_image-removebg-preview%20-%202025-02-03T182035.114%201.avif': 'about-bg.avif',
    '694a532187474f170c627019_star.avif': 'star.avif',
    '694cf6a2dcdcf9b71d6c7b50_Nighttime%20Urban%20Scene.avif': 'about-bg.avif',
    '684fd14c463253b4fa04a964_location.avif': 'icon-location.avif',
    '684fd14c4d892db0d33d31c1_phone-call.avif': 'icon-phone.avif',
    '67cacba0f8d254e9456f92b9_pexels-cedric-fauntleroy-8154349.png': 'service-main-1.jpg',
    '683054068c377aee9cbc2295_author-1.jpg': 'author.jpg',
    '6870d0619019508f6a9b3a5f_tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg': 'service-main-2.jpg',
    '67d95190ae2f9137dfb705c_67c94fea86ae445ac53d1a5a_image4.png': 'author.jpg',
    '67cac8d2eec7d2034112a7e7_pexels-mikael-blomkvist-6483579%201.png': 'service-main-1.jpg',
    '67d95198786f869b6ac6e1ac_67c94fdfc2bac85d6430d7cf_image1.png': 'author.jpg',
    '67c96e0118545bd57f95608e_13.avif': 'icon-trophy.avif',
    '67c96e025cdae2c97b0b0ebc_12.avif': 'icon-people.avif',
    '67c96e04ecb8bc4767676cc0_9.avif': 'icon-rocket.avif',
    '67c96e0225d31f30250560d6_14.avif': 'icon-globe.avif',
    '67c96e030a4e55930a546210_10.avif': 'icon-marketing.avif',
    '67c96e02c6866727bc8a4081_11.avif': 'icon-location.avif',
    '694d14b97920384c9924c016_2.avif': 'project-2.avif',
    '694d14eff888f5fd43768f08_1.avif': 'project-1.avif',
    '694d14a5b3c12fe3ddaf002c_3.avif': 'project-3.avif',
    '6870f7ebeccf3fc95b60dc71_svgviewer-output.svg': 'vector.png',
    '694a6f6742acf7e82af6d6f9_Group.png': 'vector.png',
    '67caceaa11f118840121a450_6419.avif': 'icon-location.avif',
    '6870c8989d63bd36e1eb720e_pay-per-click.svg': 'icon-ppc.svg',
    '6870c8b3ff3fffa236d03f72_master-plan.svg': 'icon-plan.svg',
    '6870c8c11dd3dd84ec4c2372_discover.svg': 'icon-discover.svg',
    '6870c8d1eca23be9cefdd4a6_ad-paid.svg': 'icon-ads.svg'
};

// Function to replace broken images with fallbacks
function fixBrokenImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        const src = img.getAttribute('src');
        const isBroken = src && src.includes('images/');
        
        // Check if image has an old generated ID
        for (let brokenSrc in missingImages) {
            if (src && src.includes(brokenSrc)) {
                const newSrc = 'images/' + missingImages[brokenSrc];
                console.log(`Replacing: ${brokenSrc} -> ${newSrc}`);
                img.setAttribute('src', newSrc);
                img.onerror = function() {
                    this.setAttribute('src', 'images/vector.png');
                };
                break;
            }
        }
    });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixBrokenImages);
} else {
    fixBrokenImages();
}

console.log('✅ Image fallback system initialized');
