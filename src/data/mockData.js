export const mockData = {
  orgA: {
    leads: [
      { id: 1, name: "Rahul", phone: "9999999999", status: "New" },
      { id: 2, name: "Amit", phone: "8888888888", status: "Converted" }
    ],
    calls: [
      { id: 1, lead: "Rahul", time: "10:00 AM", duration: "5 min", result: "Interested" }
    ]
  },
  orgB: {
    leads: [
      { id: 1, name: "Sahil", phone: "7777777777", status: "Pending" }
    ],
    calls: []
  }
};
