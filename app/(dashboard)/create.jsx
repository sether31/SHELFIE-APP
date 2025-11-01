import { FlatList, Text, View } from 'react-native'

// themes
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { useEffect, useState } from 'react'

const Create = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://192.168.1.2/shelfie/books.php", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if(!res.ok) throw new Error("FAILED");

        const data = await res.json();
        console.log(data)
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBooks();
  }, []);
  return (
    <ThemedView safe={true} className="flex-1"> 
      <ThemedText title="true" className='mb-10 text-4xl font-bold'>
        Add a New Book
      </ThemedText>

      {/* <FlatList
        data={books}
        keyExtractor={(item) => item.book_id.toString()}
        renderItem={({ item }) => (
          <ThemedText>
            {item.title} - {item.author}
          </ThemedText>
        )}
      /> */}
    </ThemedView>
  )
}

export default Create

