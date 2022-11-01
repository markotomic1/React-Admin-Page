import "./topbar.css";

function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>right</div>
      </div>
    </div>
  );
}

export default Topbar;
