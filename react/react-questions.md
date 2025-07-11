# boolean update

const [isOpen, setIsOpen] = useState(false);

// Toggle the boolean
setIsOpen(prev => !prev);

It uses the previous state safely — especially important when multiple updates happen quickly (e.g., in async code).

# updating Objects

const [user, setUser] = useState({ name: '', age: 0 });

// Update one field (e.g., name)
setUser(prev => ({
...prev,
name: 'Vignesh'
}));

# add array

const [items, setItems] = useState([]);

// Add item
setItems(prev => [...prev, 'New Item']);

# remove array

setItems(prev => prev.filter(item => item !== 'Item to remove'));

# update array

setItems(prev => prev.map(item => item.id === 2 ? { ...item, name: 'Updated' } : item));

Functions components

setCount(prev => prev + 1); // ✅ avoids stale state issues
