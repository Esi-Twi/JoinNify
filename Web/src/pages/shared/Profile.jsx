import React, { useEffect, useState } from 'react';
import { useSharedStore } from '../../store/useSharedStore';
import { formatDate } from '../../utils/dateFormat';

const Profile = () => {
  const { profileData, getProfileData, isUpdatingProfile, updateProfile } = useSharedStore()
  const [userData, setUserData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    location: "",
  });

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    if (profileData) {
      setUserData(profileData);

      setFormData({
        name: profileData?.name || "",
        phone_number: profileData?.phone_number || "",
        location: profileData?.location || "",
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(
        ([_, value]) => value?.toString().trim() !== ""
      )
    );

    await updateProfile(filteredData);
    await getProfileData();

    setShowForm(false);
  };


  return (
    <div style={styles.dashboardWrapper}>
      {/* Decorative Background Shapes */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      {/* Main Content Area */}
      <div className="main-container" style={window.innerWidth > 992 ? styles.mainContent : { padding: '20px' }}>
        <header className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-bold text-join-primary mb-0">Profile</h2>
            <p className="text-muted">Manage your profile data</p>
          </div>
        </header>

        <div className="row g-4">
          {/* LEFT COLUMN: Profile Card */}
          <div className="col-12 col-lg-5">
            <div style={styles.card}>
              <div className="text-center">
                <div style={styles.avatarContainer}>
                  {/* Placeholder for the user image from reference */}
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
                    alt="Profile"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="fw-bold mb-1">{userData?.name || "User"}</h3>
                <p className="text-muted small mb-4">Last Updated: {formatDate(userData?.updated_at)}</p>
              </div>

              {/* Personal Info */}
              {!showForm && <div className='mb-4'>
                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle me-3"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: "#22C55E"
                      }}
                    ></div>
                    <span className="fw-bold">Email: </span>
                  </div>
                  <p className='m-0 ps-4'>{userData?.email}</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle me-3"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: "#22C55E"
                      }}
                    ></div>
                    <span className="fw-bold">Location: </span>
                  </div>
                  <p className='m-0 ps-4'>{userData?.location || "Not available"}</p>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle me-3"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: "#22C55E"
                      }}
                    ></div>
                    <span className="fw-bold">Phone Number: </span>
                  </div>
                  <p className='m-0 ps-4'>{userData?.phone_number || "Not available"}</p>
                </div>


                <div className="d-flex gap-2">
                  <button onClick={() => setShowForm(true)} className="button px-3">Edit Info</button>
                </div>
              </div>}

              {showForm && (
                <form className="mb-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="text-muted small fw-bold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={formData.name}
                      onChange={handleChange}
                      className="form-control border-0 bg-light rounded-3 p-2"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-muted small fw-bold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      defaultValue={formData.phone_number}
                      onChange={handleChange}
                      className="form-control border-0 bg-light rounded-3 p-2"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-muted small fw-bold mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={formData.location}
                      onChange={handleChange}
                      className="form-control border-0 bg-light rounded-3 p-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-100 default-btn"
                    style={styles.gradientBtn}
                  >
                    {isUpdatingProfile ? "Updating..." : "Update Profile"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-7">
            <div className="row g-4">

              {/* Vital Info */}
              <div className="col-12">
                <div style={styles.card}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">Vital Info</h5>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle me-3 default-btn" style={{ width: '12px', height: '12px' }} ></div>
                      <span className="fw-medium">Role</span>
                    </div>

                    <button style={styles.statusPill(userData?.role === 'Admin' ? 'success' : 'info')}>
                      {userData?.role}
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle me-3 default-btn" style={{ width: '12px', height: '12px' }} ></div>
                      <span className="fw-medium">Verified</span>
                    </div>

                    <button style={styles.statusPill(userData?.role === 'Verified' ? 'success' : 'danger')}>
                      {userData?.verified ? "Yes": "No"}
                    </button>
                  </div>

                </div>
              </div>


              {/* xPay Accounts Card */}
              <div className="col-12">
                <div style={styles.card}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">Other Info</h5>
                    
                  </div>

                  <div className="mb-4 p-3 rounded-4 border d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fw-bold">Created</p>
                      <small className="text-muted">{formatDate(userData?.created_at)}</small>
                    </div>
                    <button style={styles.statusPill('danger')}>Delete Account</button>
                  </div>
    
                  <div className="p-3 rounded-4 border d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fw-bold">Account Status</p>
                    </div>
                    <button style={styles.statusPill('success')}>Active</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// Inline Styles for custom premium feel
const styles = {
  dashboardWrapper: {
    backgroundColor: '#EEF2FF',
  },
  mainContent: {
    padding: '40px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    border: 'none',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    padding: '30px',
    height: '100%',
    transition: 'transform 0.3s ease',
  },
  avatarContainer: {
    width: '200px',
    height: '200px',
    borderRadius: '24px',
    overflow: 'hidden',
    margin: '0 auto 24px',
    backgroundColor: '#f3f4f6',
  },
  gradientBtn: {
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    color: 'white',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
  },
  blob1: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))',
    filter: 'blur(80px)',
    borderRadius: '50%',
    bottom: '-100px',
    right: '-100px',
    zIndex: 0,
  },
  blob2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(236, 72, 153, 0.1))',
    filter: 'blur(60px)',
    borderRadius: '50%',
    top: '10%',
    right: '10%',
    zIndex: 0,
  },
  statusPill: (type) => ({
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    border: 'none',
    color: 'white',
    backgroundColor: type === 'success' ? '#0f7835' : type === 'danger' ? '#de0a0a' : '#F97316'
  })
};

export default Profile;