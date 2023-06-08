<div className={styles.contactCard2} key={item.id}>
<div className={styles.imageContainer2}>
  <img src={""} alt="" className={styles.img2} />
</div>
<div className={styles.deatailsContainer2}>
  <p className={styles.name2}>
    {item.first_name} {item.last_name}
  </p>
  <p>
    {item.phone}
  </p>
  <p>
    {item.email}
  </p>

  <p className={styles.bio2}>{item.bio.slice(0, 40)}...</p>
</div>
<div className={styles.callToActionContainer2}>
  <Link to={`/profile/${item.id}`}>
    <button className={styles.actionButton2}>Profile</button>
  </Link>
  <MoreVertIcon
    sx={{ fontSize: 25 }}
    className={styles.moreIcon2}
  />
</div>
</div>



getContact = async () => {
  const snapshot = await getDoc(contactRef);
  const data = snapshot.data();
  setDetails(data.docs.map((doc) => ({ ...data, id: snapshot.id })));
};

setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));