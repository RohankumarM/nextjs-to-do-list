async function getTickets(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const data = await res.json();

  return data;
}

export default async function TicketDetails({ params }) {
  const ticket = await getTickets(params.id);

  return (
    <main>
      <nav>
        <div className="card">
          <h2>Ticket Details</h2>

          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </nav>
    </main>
  );
}
