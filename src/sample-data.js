let messages = {
  conversations: [
    {
      id: 101,
      type: "channel",
      name: "Springfield Says",
      messages: [
        {
          timestamp: 1539903440179,
          user: "Dr. Nick",
          message: "Hi everybody!"
        },
        {
          timestamp: 1539903440379,
          user: "Homer",
          message: "D'oh!"
        }
      ]
    },
    {
      id: 102,
      type: "channel",
      name: "Water Cooler",
      messages: [
        {
          timestamp: 1539903440179,
          user: "Ned Flanders",
          message: "hey reverend, do you have quick diddly second?"
        },
        {
          timestamp: 1539903440379,
          user: "Reverend Lovejoy",
          message: "not now, ned"
        }
      ]
    },
    {
      id: 1001,
      name: "Carl",
      type: "person",
      messages: [
        {
          timestamp: 1539903440179,
          user: "Carl",
          message: "hi it's carl"
        },
        {
          timestamp: 1539903440279,
          user: "Me",
          message: "carl who?"
        },
        {
          timestamp: 1539903440379,
          user: "Carl",
          message: "from work!"
        }
      ]
    },
    {
      id: 1002,
      name: "Lenny",
      type: "person",
      messages: [
        {
          timestamp: 1539903440179,
          user: "Lenny",
          message: "lenny here -- don't listen to carl"
        },
        {
          timestamp: 1539903440379,
          user: "Lenny",
          message: "he's crazy"
        }
      ]
    }
  ]
};

export { messages };
