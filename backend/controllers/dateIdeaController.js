import DateIdeas from '../models/dateIdea.js';


//get 
const wordsearch = async(req, res) =>{
    try{
        const {keyword} = req.query

         // Fetch all documents from the DateIdeas collection
         const dateIdeas = await DateIdeas.find();
         const datesIdeasOnly = dateIdeas.map(dict => dict["dateIdea"]);
         const filteredIdeas = datesIdeasOnly.filter(value => value.toLowerCase().includes(keyword.toLowerCase()));

         console.log("Date Ideas fetched:", filteredIdeas);

        
        res.status(200).json({
            message : "date ideas fetched",
            success : true,
            data : filteredIdeas
        })
    }
    catch (err){
        console.error("Error fetching profile:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
    
}

//create a get for category. Where the category will be passed in
const categoryFilter = async (req, res) => {
    try {
        const { category } = req.query;
        

        if (!category || category.trim() === "") {
            return res.status(400).json({
                message: "Category is required.",
                success: false,
            });
        }

        // Find all dateIdeas that match the category exactly
        const categoried_dates = await DateIdeas.find(
            { category: category.trim() }, 
            'dateIdea' 
        );


        res.status(200).json({
            message: "Date ideas fetched successfully",
            success: true,
            data: categoried_dates
        });
    } catch (err) {
        console.error("Error fetching date ideas:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


export { categoryFilter, wordsearch };