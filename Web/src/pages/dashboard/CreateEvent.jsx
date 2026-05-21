import { useState } from 'react';
import { formattedEventCategories } from '../../constants/eventCategories';
import { useEventStore } from '../../store/useEventStore';

const CreateEvent = () => {
    const { createEvent, isCreatingEvent } = useEventStore()
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        desc: "",
        images: [],
        location: "",
        start_date: "",
        end_date: "",
        price: 0,
        capacity: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

 
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const validFiles = files.filter(
            file =>
                file.type.startsWith("image/") ||
                file.type.startsWith("video/")
        );

        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...validFiles]
        }));
    };

    const removeImage = (index) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("desc", formData.desc);
        data.append("location", formData.location);
        data.append("start_date", formData.start_date);
        data.append("end_date", formData.end_date);
        data.append("price", formData.price);
        data.append("capacity", formData.capacity);

        formData.images.forEach(file => {
            data.append("images", file);
        });

        await createEvent(data);

        setFormData({
            title: "",
            category: "",
            desc: "",
            images: [],
            location: "",
            start_date: "",
            end_date: "",
            price: 0,
            capacity: ""
        });
    };


    /*
    {
  title: "Tech Summit 2026",
  location: "Accra Conference Center",
  capacity: 500,
  price: 100,
  start_date: "2026-05-20T10:00",
  end_date: "2026-05-20T18:00",
  images: [File, File],
  category: "Technology & Infrastructures",
  desc: "Annual technology conference..."
}
    */

    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 max-width-lg mx-auto" style={{ maxWidth: '960px' }}>
                <h5 className="fw-bold text-indigo fs-3 mb-4 pb-2 border-bottom">Create New Event</h5>

                <form onSubmit={handleSubmit} className="row g-4">
                    <div className="col-12 col-md-8">
                        <label className="form-label small fw-semibold">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="form-control rounded-3 p-2.5 border"
                            required
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label small fw-semibold"> Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="form-select rounded-3 p-2.5 border"
                            required
                        >
                            <option value="">Select Category</option>

                            {formattedEventCategories.map((cat) => (
                                <option key={cat.value} value={cat.value}>
                                    {cat.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-12">
                        <label className="form-label small fw-semibold">Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleChange}
                            className="form-control rounded-3 p-2.5 border"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary small fw-semibold">
                            Media Cover Showcase Asset
                        </label>

                        <div className="border rounded-3 p-4 bg-light" style={{ borderStyle: "dashed" }}>

                            {/* clickable upload zone only */}
                            <label className="text-center d-block position-relative cursor-pointer">
                                <i className="bi bi-cloud-arrow-up fs-2 text-muted mb-2 d-block"></i>

                                <span className="small text-dark fw-medium d-block mb-1">
                                    Click to upload or drag images/videos
                                </span>

                                <span
                                    className="text-muted extra-small d-block"
                                    style={{ fontSize: "11px" }}
                                >
                                    PNG, JPG, MP4, MOV up to 5MB
                                </span>

                                <input
                                    type="file"
                                    name="images"
                                    multiple
                                    accept="image/*,video/*"
                                    onChange={handleImageChange}
                                    className="d-none"
                                />
                            </label>

                            {/* selected files list */}
                            {formData.images.length > 0 && (
                                <div className="mt-3">
                                    {formData.images.map((file, index) => (
                                        <div
                                            key={index}
                                            className="d-flex justify-content-between align-items-center bg-white border rounded p-2 mb-2"
                                        >
                                            <span className="small text-success">
                                                ✓ {file.name}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="btn btn-sm btn-outline-danger"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row g-3">
                            <div className="col-12">
                                {/* <label className="form-label small fw-semibold">
                                    Execution Venue Setup Type
                                </label>
                                <div className="d-flex gap-3">
                                    <div className="form-check flex-grow-1 border p-2.5 rounded-3 bg-light d-flex align-items-center ps-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="evtType"
                                            id="phys"
                                            defaultChecked
                                        />
                                        <label className="form-check-label text-dark fw-medium small ms-2" htmlFor="phys">
                                            Physical Venue
                                        </label>
                                    </div>
                                    <div className="form-check flex-grow-1 border p-2.5 rounded-3 bg-light d-flex align-items-center ps-4">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="evtType"
                                            id="virt"
                                        />
                                        <label className="form-check-label text-dark fw-medium small ms-2" htmlFor="virt">
                                            Virtual Stream
                                        </label>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="form-control rounded-3 p-2.5 border"
                                    placeholder="Venue location coordinates or virtual pipeline token URL"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="form-label small fw-semibold">Start Date</label>
                        <input
                            type="datetime-local"
                            name="start_date"
                            value={formData.start_date}
                            onChange={handleChange}
                            className="form-control rounded-3 p-2.5 border"
                            required
                        />
                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="form-label small fw-semibold">End Date</label>
                        <input
                            type="datetime-local"
                            name="end_date"
                            value={formData.end_date}
                            onChange={handleChange}
                            className="form-control rounded-3 p-2.5 border"
                            required
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                            Ticket Price Parameters (Ghana Cedis)
                        </label>
                        <div className="input-group">
                            <span className="input-group-text rounded-start-3 bg-light text-muted border-end-0">GHC</span>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                min="0"
                                className="form-control rounded-end-3 p-2.5 border"
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold">
                            Maximum Unit Capacity Bounds
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            min="1"
                            className="form-control rounded-3 p-2.5 border"
                            placeholder="e.g. 500 "
                            required
                        />
                    </div>

                    <div className="col-12 d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                        <button
                            type="submit"
                            className="btn text-white px-4 py-2.5 rounded-3 fw-semibold border-0"
                            style={{ backgroundColor: '#4F46E5' }}
                        >
                            {isCreatingEvent ? "Creating Event..." : "Publish Event"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;