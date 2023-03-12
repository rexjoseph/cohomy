import React from 'react'
import styled from 'styled-components'

const AnnouncementContainer = styled.div`
  background: #${props => props.bgColor};
  color: #${props => props.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem .25rem;
`

const Paragraph = styled.p`
  color: #${props => props.textColor};
  font-size: 11px;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  height: 100%;
  letter-spacing: .1px;
  text-align: center;
  text-decoration: none;
  width: 100%;
`

const Placeholder = styled.div`
  // background: #0045BD;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem .25rem;
`

const Announcement = ({children}) => {
  // const [announcement, setAnnouncement] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getAnnouncement = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/announcement/all")
  //       setAnnouncement(res.data)
  //       setLoading(true)
  //     } catch (err) {}
  //   }
  //   getAnnouncement()
  // }, [])

  return (
    <>
      <AnnouncementContainer bgColor="000">
        <Paragraph textColor="fff">Own private rooms in Galway? Put up space with REOS</Paragraph>
      </AnnouncementContainer>
    </>
  )
}

export default Announcement;
