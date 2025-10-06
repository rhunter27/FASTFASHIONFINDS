import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with actual API base URL

//Function to search with an image
export const searchWithImage = async (imageData) => {
    try {
        const responsr = await axios.post(`${BASE_URL}/search`, imageData, {
            headers: {
                'Content-Type': "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching with image:', error);
        throw error;
    }
};

//Funtion to fetch favorite items
export const fetchFavorites = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/favorites`);
        return response.data;
    } catch (error) {
        console.error('Error fetching favorites:', error);
        throw error;
    }
};

//Function to add an item to favorites
export const addToFavorites = async (item) => {
    try {
        const response = await axios.post(`${BASE_URL}/favorites`, item, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding to favorites:', error);
        throw error;
    }
};
//Function to remove an item from favorites
export const removeFromFavorites = async (itemId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/favorites/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing from favorites:', error);
        throw error;
    }
};
//Function to fetch fashion trends
export const fetchTrends = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trends`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trends:', error);
        throw error;
    }
};
//Function to fetch runway shows
export const fetchRunwayShows = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/runway`);
        return response.data;
    } catch (error) {
        console.error('Error fetching runway shows:', error);
        throw error;
    }
};
//Function to fetch fashion week events
export const fetchFashionWeekEvents = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fashion-week`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fashion week events:', error);
        throw error;
    }
};
//Function to fetch user profile
export const fetchUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};
//Function to update user profile
export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, profileData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};
//Function to fetch notifications
export const fetchNotifications = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/notifications`);
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
};
//Function to mark notification as read
export const markNotificationAsRead = async (userId, notificationId) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}/notifications/${notificationId}`, null, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error marking notification as read:', error);
        throw error;
    }
};
//Funtion to fech shopping cart items
export const fetchCartItems = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/cart`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};
//Function to add item to shopping cart
export const addToCart = async (userId, item) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/cart`, item, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw error;
    }
};
//Function to remove item from shopping cart
export const removeFromCart = async (userId, itemId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}/cart/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing from cart:', error);
        throw error;
    }
};
//Function to checkout
export const checkout = async (userId, paymentData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/checkout`, paymentData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error;
    }
};
//Function to fetch order history
export const fetchOrderHistory = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/orders`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order history:', error);
        throw error;
    }
};
//Function to fetch detailed item info
export const fetchItemDetails = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item details:', error);
        throw error;
    }
};
//Function to fetch categories
export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
//Function to fetch brands
export const fetchBrands = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/brands`);
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};
//Function to fetch size guide
export const fetchSizeGuide = async (brandId) => {
    try {
        const response = await axios.get(`${BASE_URL}/brands/${brandId}/size-guide`);
        return response.data;
    } catch (error) {
        console.error('Error fetching size guide:', error);
        throw error;
    }
};
//Function to fetch reviews for an item
export const fetchItemReviews = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item reviews:', error);
        throw error;
    }
};
//Function to add a review for an item
export const addItemReview = async (itemId, reviewData) => {
    try {
        const response = await axios.post(`${BASE_URL}/items/${itemId}/reviews`, reviewData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item review:', error);
        throw error;
    }
};
//Function to fetch descriptive tags for an item
export const fetchItemTags = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/tags`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item tags:', error);
        throw error;
    }
};
//Function to fetch related items
export const fetchRelatedItems = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/related`);
        return response.data;
    } catch (error) {
        console.error('Error fetching related items:', error);
        throw error;
    }
};
//Function to fetch links to purchase an item
export const fetchPurchaseLinks = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/purchase-links`);
        return response.data;
    } catch (error) {
        console.error('Error fetching purchase links:', error);
        throw error;
    }
};
//Function to fetch inventory status for an item
export const fetchInventoryStatus = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/inventory`);
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory status:', error);
        throw error;
    }
};
//Function to fetch size availability for an item
export const fetchSizeAvailability = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/sizes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching size availability:', error);
        throw error;
    }
};
//Function to fetch shipping options for an item
export const fetchShippingOptions = async (itemId) => {
    try {
        const response = await axios.get(`${BASE_URL}/items/${itemId}/shipping`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shipping options:', error);
        throw error;
    }
};
//Function to fetch luxury items
export const fetchLuxuryItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/luxury-items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching luxury items:', error);
        throw error;
    }
};
//Function to fetch sustainable fashion items
export const fetchSustainableItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/sustainable-items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sustainable items:', error);
        throw error;
    }
};
//Function to fetch budget-friendly fashion items
export const fetchBudgetItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/budget-items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching budget items:', error);
        throw error;
    }
};
//Function to fetch seasonal collections
export const fetchSeasonalCollections = async (season) => {
    try {
        const response = await axios.get(`${BASE_URL}/collections/${season}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching seasonal collections:', error);
        throw error;
    }
};
//Function to fetch exclusive collaborations
export const fetchExclusiveCollaborations = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/exclusive-collaborations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exclusive collaborations:', error);
        throw error;
    }
};
//Function to fetch fashion news
export const fetchFashionNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fashion-news`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fashion news:', error);
        throw error;
    }
};
//Function to fetch fashion blogs
export const fetchFashionBlogs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fashion-blogs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fashion blogs:', error);
        throw error;
    }
};
//Function to fetch fashion influencers
export const fetchFashionInfluencers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fashion-influencers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fashion influencers:', error);
        throw error;
    }
};
//Function to fetch home furnishings
export const fetchHomeFurnishings = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/home-furnishings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching home furnishings:', error);
        throw error;
    }
};
//Function to fetch beauty products
export const fetchBeautyProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/beauty-products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching beauty products:', error);
        throw error;
    }
};
//Function to fetch lifestyle items
export const fetchLifestyleItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/lifestyle-items`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lifestyle items:', error);
        throw error;
    }
};
//Function to fetch tech accessories
export const fetchTechAccessories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/tech-accessories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tech accessories:', error);
        throw error;
    }
};
//Function to fetch gift ideas
export const fetchGiftIdeas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/gift-ideas`);
        return response.data;
    } catch (error) {
        console.error('Error fetching gift ideas:', error);
        throw error;
    }
};
//Function to fetch travel essentials
export const fetchTravelEssentials = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/travel-essentials`);
        return response.data;
    } catch (error) {
        console.error('Error fetching travel essentials:', error);
        throw error;
    }
};
//Function to fetch fitness gear
export const fetchFitnessGear = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fitness-gear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fitness gear:', error);
        throw error;
    }
};
//Function to fetch menswear items
export const fetchMenswearItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/menswear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menswear items:', error);
        throw error;
    }
};
//Function to fetch womenswear items
export const fetchWomenswearItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/womenswear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching womenswear items:', error);
        throw error;
    }
};
//Function to fetch streetwear items
export const fetchStreetwearItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/streetwear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching streetwear items:', error);
        throw error;
    }
};
//Function to fetch kidswear items
export const fetchKidswearItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/kidswear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching kidswear items:', error);
        throw error;
    }
};
//Function to fetch accessories items
export const fetchAccessoriesItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/accessories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching accessories items:', error);
        throw error;
    }
};
//Function to fetch footwear items
export const fetchFootwearItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/footwear`);
        return response.data;
    } catch (error) {
        console.error('Error fetching footwear items:', error);
        throw error;
    }
};

//Function to upload a screenshot
export const uploadScreenshot = async (screenshotData) => {
    try {
        const response = await axios.post(`${BASE_URL}/screenshot-uploads`, screenshotData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading screenshot:', error);
        throw error;
    }
};
//Function to fetch screenshot upload history
export const fetchScreenshotHistory = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/screenshot-uploads`);
        return response.data;
    } catch (error) {
        console.error('Error fetching screenshot history:', error);
        throw error;
    }
};
//Function to delete a screenshot upload
export const deleteScreenshotUpload = async (userId, uploadId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}/screenshot-uploads/${uploadId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting screenshot upload:', error);
        throw error;
    }
};
//Function to fetch analytics data
export const fetchAnalyticsData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/analytics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        throw error;
    }
};
//Function to fetch user settings
export const fetchUserSettings = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/settings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user settings:', error);
        throw error;
    }
};
//Function to create moodboard
export const createMoodboard = async (userId, moodboardData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/moodboards`, moodboardData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating moodboard:', error);
        throw error;
    }
};
//Function to fetch moodboards
export const fetchMoodboards = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/moodboards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching moodboards:', error);
        throw error;
    }
};
//Function to update moodboard
export const updateMoodboard = async (userId, moodboardId, moodboardData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}/moodboards/${moodboardId}`, moodboardData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating moodboard:', error);
        throw error;
    }
};
//Function to delete moodboard
export const deleteMoodboard = async (userId, moodboardId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}/moodboards/${moodboardId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting moodboard:', error);
        throw error;
    }
};
//Function to add item to moodboard
export const addItemToMoodboard = async (userId, moodboardId, item) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/moodboards/${moodboardId}/items`, item, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding item to moodboard:', error);
        throw error;
    }
};
//Function to remove item from moodboard
export const removeItemFromMoodboard = async (userId, moodboardId, itemId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}/moodboards/${moodboardId}/items/${itemId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing item from moodboard:', error);
        throw error;
    }
};
//Function to share moodboard
export const shareMoodboard = async (userId, moodboardId, shareData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/moodboards/${moodboardId}/share`, shareData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sharing moodboard:', error);
        throw error;
    }
};
//Function to fetch shared moodboards
export const fetchSharedMoodboards = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${userId}/shared-moodboards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shared moodboards:', error);
        throw error;
    }
};
//Function to fetch AI-generated outfit suggestions
export const fetchOutfitSuggestions = async (userId, preferences) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/${userId}/outfit-suggestions`, preferences, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching outfit suggestions:', error);
        throw error;
    }
};
//Funtion to fetch home page data
export const fetchHomePageData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/home`);
        return response.data;
    } catch (error) {
        console.error('Error fetching home page data:', error);
        throw error;
    }
};