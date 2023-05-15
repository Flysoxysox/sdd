import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Modal } from "react-native";

const RecipeItem = ({ name, ingredients, servingSize, time, procedure, nutrition, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity  onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.recipeItem, { backgroundColor: colors.card }]}>
        <Text style={[styles.recipeName, { color: colors.text }]}>
          {name}
        </Text>
        <Text style={[styles.recipeInfo, { color: colors.text }]}>
          Serving Size: {servingSize}
        </Text>
        <Text style={[styles.recipeInfo, { color: colors.text }]}>
          Time: {time} minutes
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function RLibrary({ navigation }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  const recipes = [
    {
      name: 'Carbonara',
      ingredients: [
        '8 ounces spaghetti',
        '4 ounces bacon, chopped',
        '2 cloves garlic, minced',
        '2 large eggs',
        '1/2 cup grated Parmesan cheese',
        '1/2 teaspoon black pepper',
        'Chopped fresh parsley, for garnish',
      ],
      servingSize: '2',
      time: '20',
      procedure: [
        'Cook the spaghetti according to package instructions. Drain and set aside.',
        'In a large skillet, cook the bacon over medium heat until crispy. Remove the bacon from the skillet and set aside.',
        'In the same skillet, add the minced garlic and cook for 1-2 minutes until fragrant.',
        'In a small bowl, whisk together the eggs, Parmesan cheese, and black pepper.',
        'Add the cooked spaghetti to the skillet with the garlic. Remove the skillet from heat and pour the egg mixture over the spaghetti. Toss quickly to coat the pasta evenly.',
        'Add the crispy bacon and toss again to combine.',
        'Garnish with chopped fresh parsley and serve immediately.',
      ],
      nutrition: [
        'Calories: 530',
        'Carbohydrates: 49g',
        'Protein: 26g',
        'Fat: 24g',
      ],
    },
    {
      name: 'Chicken Stir-Fry',
      ingredients: [
        '2 boneless, skinless chicken breasts, thinly sliced',
        '2 tablespoons soy sauce',
        '1 tablespoon oyster sauce',
        '1 tablespoon cornstarch',
        '1/2 cup chicken broth',
        '2 tablespoons vegetable oil',
        '2 cloves garlic, minced',
        '1 teaspoon grated fresh ginger',
        '1 cup broccoli florets',
        '1 carrot, julienned',
        '1/2 red bell pepper, thinly sliced',
        '1/2 yellow bell pepper, thinly sliced',
        '1/2 cup snap peas',
        'Chopped green onions, for garnish',
        'Cooked rice, for serving',
      ],
      servingSize: '4',
      time: '30',
      procedure: [
        'In a bowl, combine the soy sauce, oyster sauce, cornstarch, and chicken broth. Set aside.',
        'Heat the vegetable oil in a large skillet or wok over medium-high heat.',
        'Add the minced garlic and grated ginger to the skillet. Cook for 1-2 minutes until fragrant.',
        'Add the sliced chicken breasts to the skillet and cook until browned and cooked through.',
        'Add the broccoli florets, julienned carrot, sliced bell peppers, and snap peas to the skillet. Stir-fry for 3-4 minutes until the vegetables are tender-crisp.',
        'Pour the sauce mixture over the chicken and vegetables. Stir well to coat everything evenly.',
        'Continue cooking for another 1-2 minutes until the sauce thickens.',
        'Garnish with chopped green onions and serve the chicken stir-fry over cooked rice.',
      ],
      nutrition: [
        'Calories: 320',
        'Carbohydrates: 16g',
        'Protein: 30g',
        'Fat: 14g',
      ],
    },
    {
      name: 'Caprese Salad',
      ingredients: [
        '1 large tomato, sliced',
        '4 ounces fresh mozzarella, sliced',
        '2 tablespoons chopped fresh basil',
        '2 tablespoons olive oil',
        '1 tablespoon balsamic vinegar',
        'Salt and pepper to taste',
      ],
      servingSize: '2',
      time: '10',
      procedure: [
        'Arrange the tomato and mozzarella slices on a plate.',
        'In a small bowl, whisk together the olive oil and balsamic vinegar.',
        'Drizzle the dressing over the tomato and mozzarella slices.',
        'Sprinkle the chopped basil on top of the salad.',
        'Season with salt and pepper to taste.',
        'Serve immediately.',
      ],
      nutrition: [
        'Calories: 290',
        'Carbohydrates: 5g',
        'Protein: 13g',
        'Fat: 24g',
      ],
    },
    {
      name: 'Beef Tacos',
      ingredients: [
        '1 pound ground beef',
        '1 packet taco seasoning',
        '1/2 cup water',
        '8 taco shells',
        '1 cup shredded cheddar cheese',
        '1/2 cup chopped tomatoes',
        '1/4 cup chopped onions',
        '1/4 cup chopped cilantro',
        'Sour cream, for serving',
        'Salsa, for serving',
      ],
      servingSize: '4',
      time: '25',
      procedure: [
        'In a large skillet over medium-high heat, cook the ground beef until browned.',
        'Drain off any excess fat.',
        'Add the taco seasoning and water to the skillet. Stir well.',
        'Simmer for 5-10 minutes until the sauce thickens.',
        'Preheat the taco shells in the oven or microwave according to package instructions.',
        'Fill the taco shells with the beef mixture.',
        'Top with shredded cheese, chopped tomatoes, onions, and cilantro.',
        'Serve with sour cream and salsa on the side.',
      ],
      nutrition: [
        'Calories: 450',
        'Carbohydrates: 19g',
        'Protein: 25g',
        'Fat: 31g',
      ],
    },
    {
      name: 'Garlic Butter Shrimp Pasta',
      ingredients: [
        '8 ounces spaghetti',
        '1 pound large shrimp, peeled and deveined',
        '2 tablespoons unsalted butter',
        '4 cloves garlic, minced',
        '1/2 teaspoon red pepper flakes',
        '1/2 cup white wine',
        '1/2 cup chicken broth',
        '1/2 cup heavy cream',
        '1/2 cup grated Parmesan cheese',
        'Salt and black pepper, to taste',
        'Chopped fresh parsley, for garnish',
      ],
      servingSize: '2',
      time: '25',
      procedure: [
        'Cook the spaghetti according to package instructions. Drain and set aside.',
        'In a large skillet, melt the butter over medium-high heat.',
        'Add the minced garlic and red pepper flakes to the skillet. Cook for 1-2 minutes until fragrant.',
        'Add the shrimp to the skillet and cook until pink and cooked through. Remove the shrimp from the skillet and set aside.',
        'Pour the white wine and chicken broth into the skillet. Bring to a boil and let simmer for 3-4 minutes.',
        'Add the heavy cream and Parmesan cheese to the skillet. Stir well until the cheese is melted and the sauce is smooth.',
        'Add the cooked spaghetti and shrimp to the skillet. Toss well to coat everything evenly.',
        'Season with salt and black pepper to taste.',
        'Garnish with chopped fresh parsley and serve immediately.',
      ],
      nutrition: [
        'Calories: 630',
        'Carbohydrates: 51g',
        'Protein: 47g',
        'Fat: 22g',
      ],
    },
    {
      name: 'Beef and Broccoli Stir-Fry',
      ingredients: [
        '1 pound flank steak, thinly sliced against the grain',
        '1 tablespoon cornstarch',
        '1/4 cup soy sauce',
        '2 tablespoons oyster sauce',
        '1 tablespoon honey',
        '1 tablespoon vegetable oil',
        '4 cloves garlic, minced',
        '1 teaspoon grated fresh ginger',
        '4 cups broccoli florets',
        '1/4 cup chicken broth',
        '1/4 cup water',
        'Chopped green onions, for garnish',
        'Cooked rice, for serving',
      ],
      servingSize: '4',
      time: '25',
      procedure: [
        'In a bowl, whisk together the cornstarch, soy sauce, oyster sauce, honey, and 1/4 cup water. Set aside.',
        'In a large skillet or wok, heat the vegetable oil over high heat.',
        'Add the minced garlic and grated ginger to the skillet. Cook for 1-2 minutes until fragrant.',
        'Add the sliced flank steak to the skillet and cook for 2-3 minutes until browned.',
        'Add the broccoli florets to the skillet and stir-fry for 3-4 minutes until tender-crisp.',
        'Pour the sauce mixture over the beef and broccoli in the skillet. Stir well to coat everything evenly.',
        'Add the chicken broth to the skillet and bring to a boil.',
        'Continue cooking for another 1-2 minutes until the sauce thickens.',
        'Garnish with chopped green onions and serve the beef and broccoli stir-fry over cooked rice.',
      ],
      nutrition: [
        'Calories: 380',
        'Carbohydrates: 17g',
        'Protein: 37g',
        'Fat: 20g',
      ],
    },
    {
      name: 'Chicken Parmesan',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '1 cup breadcrumbs',
        '1/2 cup grated Parmesan cheese',
        '1 teaspoon dried oregano',
        '1/2 teaspoon garlic powder',
        '1/2 teaspoon salt',
        '1/4 teaspoon black pepper',
        '2 eggs, beaten',
        '1 cup marinara sauce',
        '1 cup shredded mozzarella cheese',
        'Chopped fresh basil, for garnish',
      ],
      servingSize: '2',
      time: '30',
      procedure: [
        'Preheat the oven to 400°F (200°C).',
        'In a shallow dish, combine breadcrumbs, grated Parmesan cheese, dried oregano, garlic powder, salt, and black pepper.',
        'Dip each chicken breast into beaten eggs, then coat it with the breadcrumb mixture, pressing gently to adhere.',
        'In a large skillet, heat olive oil over medium-high heat. Cook the breaded chicken breasts for about 4-5 minutes per side, or until golden brown and cooked through.',
        'Transfer the cooked chicken breasts to a baking dish. Top each breast with marinara sauce, followed by shredded mozzarella cheese.',
        'Bake in the preheated oven for about 10-12 minutes, or until the cheese is melted and bubbly.',
        'Remove from the oven and let it rest for a few minutes before serving.',
        'Garnish with chopped fresh basil and serve with pasta or a side salad.',
      ],
      nutrition: [
        'Calories: 450',
        'Carbohydrates: 20g',
        'Protein: 48g',
        'Fat: 16g',
      ],
    },
    {
      name: 'Chocolate Chip Cookies',
      ingredients: [
        '1 cup unsalted butter, softened',
        '1 cup granulated sugar',
        '1 cup brown sugar, packed',
        '2 large eggs',
        '1 teaspoon vanilla extract',
        '3 cups all-purpose flour',
        '1 teaspoon baking soda',
        '1/2 teaspoon salt',
        '2 cups chocolate chips',
      ],
      servingSize: '24',
      time: '45',
      procedure: [
        'Preheat the oven to 375°F (190°C).',
        'In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.',
        'Beat in the eggs, one at a time, followed by the vanilla extract.',
        'In a separate bowl, whisk together the all-purpose flour, baking soda, and salt.',
        'Gradually add the dry ingredients to the wet ingredients, mixing well after each addition.',
        'Stir in the chocolate chips until evenly distributed throughout the dough.',
        'Drop rounded tablespoons of dough onto ungreased baking sheets, spacing them about 2 inches apart.',
        'Bake in the preheated oven for 9-11 minutes, or until the edges are golden brown.',
        'Allow the cookies to cool on the baking sheets for a few minutes, then transfer them to wire racks to cool completely.',
        'Enjoy the delicious homemade chocolate chip cookies!',
      ],
      nutrition: [
        'Calories: 230',
        'Carbohydrates: 32g',
        'Protein: 2g',
        'Fat: 11g',
      ],
    }
  ];
  
  

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.name}
            name={recipe.name}
            ingredients={recipe.ingredients}
            servingSize={recipe.servingSize}
            time={recipe.time}
            procedure={recipe.procedure}
            nutrition={recipe.nutrition}
            onPress={() => openModal(recipe)}
          />
        ))}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={[styles.modalContainer]}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <ScrollView scrollIndicatorInsets={{ right: 1 }}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                {selectedRecipe.name}
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}><Text style={[styles.modalTextHeader]}>Servings:</Text> {selectedRecipe.servingSize}
              </Text>
              <Text style={[styles.modalText, { color: colors.text }]}>
              <Text style={[styles.modalTextHeader]}>Time:</Text> {selectedRecipe.time} 
                </Text>
              <Text style={[styles.modalTextHeader, { color: colors.text }]}>
                Ingredients:
              </Text>
              {selectedRecipe.ingredients && selectedRecipe.ingredients.length > 0 ? (
                <View style={styles.bulletList}>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      &bull; {ingredient}
                    </Text>
                  ))}
                </View>
              ) : (
                <Text style={[styles.modalText, { color: colors.text }]}>
                  No ingredients found.
                </Text>
              )}
              
              <Text style={[styles.modalTextHeader, { color: colors.text }]}>
                Procedure: 
              </Text>
              {selectedRecipe.procedure && selectedRecipe.procedure.length > 0 ? (
                <View style={styles.numberedList}>
                  {selectedRecipe.procedure.map((step, index) => (
                    <View key={index} style={styles.stepContainer}><Text style={styles.stepNumber}>{index + 1}. </Text>
                    <Text style={styles.stepText}>{step}</Text>
                     
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={[styles.modalText, { color: colors.text }]}>
                  No procedure steps found.
                </Text>
              )}
              
              <Text style={styles.modalTextHeader}>Nutrition Facts:</Text>
              {selectedRecipe.nutrition && selectedRecipe.nutrition.length > 0 ? (
                <View style={styles.bulletList}>
                  {selectedRecipe.nutrition.map((nutrition, index) => (
                    <Text key={index} style={styles.bulletPoint}>
                      &bull; {nutrition}
                    </Text>
                  ))}
                </View>
              ) : (
                <Text style={[styles.modalText, { color: colors.text }]}>
                  No nutrition facts found.
                </Text>
              )}
              
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: colors.primary }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalButtonText, { color: colors.text }]}>
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  recipeItem: {
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recipeInfo: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalContent: {
    borderRadius: 30,
    padding: 20,
    width: "100%",

    justifyContent: "center",
    height: "70%",
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: 24, 
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
  },
  modalTextHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify",
    marginBottom: 20,
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bulletList: {
    marginLeft: 20,
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: 16,
    marginBottom: 5,
  },
  numberedList: {
    marginLeft: 20,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: "row",
  alignItems: "flex-start",
  marginBottom: 10,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    paddingBottom: 30,
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    textAlign: "justify",
  
  },
});




export default RLibrary;

