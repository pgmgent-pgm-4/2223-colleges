const Mailbox = ({ unreadMessages }) => {
  if (unreadMessages && unreadMessages > 0) {
    return <p>You have {unreadMessages} unread messages.</p>
  }
  return <p>You have no new messages.</p>
};

export default Mailbox;