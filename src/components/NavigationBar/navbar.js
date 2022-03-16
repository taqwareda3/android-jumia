import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Cart/cart';
import showProducts from '../showProducts/showProducts';
const Tab = createBottomTabNavigator();
const Navbar = () => {
     return (
          <Tab.Navigator>
            <Tab.Screen name="Jumia home" component={showProducts} />
            <Tab.Screen name="cart" component={Cart} />
          </Tab.Navigator>
        );
}
 
export default Navbar;