import supabase from "../utils/supabaseHelper";

const turkishToEnglish = (str) => {
    const letters = { "İ": "i", "I": "i", "Ş": "s", "Ğ": "g", "Ü": "u", "Ö": "o", "Ç": "c", "ı": "i", "ş": "s", "ğ": "g", "ü": "u", "ö": "o", "ç": "c" };
    return str.replace(/([İIŞĞÜÇÖışğüöç])/g, function (letter) {
        return letters[letter];
    });
};

export async function getTrainingCategories() {
    try {
        const { data: TrainingCategories, error } = await supabase
            .from('TrainingCategories').select('*');

        // console.log(TrainingCategories);

        if (error) {
            throw error;
        }

        const trainingCategoriesWithPhotoURL = await Promise.all(
            TrainingCategories.map(async (trainingCategories) => {
                const photoURL = `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/trainingCategories/${trainingCategories.en_name}.jpg`;

                return { ...trainingCategories, photoURL };
            })

        )

        return trainingCategoriesWithPhotoURL;
    }
    catch (error) {
        console.error('Eğitim Kategorileri alınırken hata oluştu:', error.message);
        return [];
    }
}

export async function getTrainings() {
    try {
        const { data: Trainings, error } = await supabase
            .from('Trainings').select('*');

        if (error) {
            throw error;
        }

        //Çektiğimiz kategori id ve name'leri categoryNames içine atıyoruz
        const categoryNames = await getTrainingCategoriesName();

        const categoriesWithPhotoURL = await Promise.all(
            Trainings.map(async (training) => {

                const urlName = training.name.toLowerCase().replace(/\s+/g, '-');

                const englishUrlName = turkishToEnglish(training.name).toLowerCase().replace(/\s+/g, '-');
                //küçük harfe çevrildi ve boşluklara - koyuldu
                const photoURL = `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/trainings/${englishUrlName}.jpg`;

                // Eğitimin hangi eğitim kategorisine ait olduğunu buluyoruz.
                const category = categoryNames.find((category) => category.id === training.category_id);

                // training ve fotoğrafların url'leri trainingsWithPhotoURL içine eklendi.
                // categoryName ile eğitimlere ait bulunan kategoriler trainingsWithPhotoURL içine eklendi
                return { ...training, photoURL, categoryName: category ? category.name : '', urlName, englishUrlName };
            })
        );

        return categoriesWithPhotoURL;
    }
    catch (error) {
        console.error('Eğitim bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}

export async function getInstructors() {
    try {
        const { data: Instructors, error } = await supabase
            .from('Instructors').select('*');

        if (error) {
            throw error;
        }

        //Çektiğimiz kategori id ve name'leri categoryNames içine atıyoruz
        const categoryNames = await getTrainingCategoriesName();

        const instructorsWithPhotoURL = Instructors.map(instructor => {
            const urlName = instructor.name.toLowerCase().replace(/\s+/g, '-');
            const englishUrlName = turkishToEnglish(instructor.name).toLocaleLowerCase().split(" ").join("-")
            //küçük harfe çevrildi ve boşluklara - koyuldu

            const { data } = supabase
                .storage
                .from('instructors')
                .getPublicUrl(`${englishUrlName}.jpg`);

            // const photoURL = `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/instructors/${englishUrlName}.jpg`;

            // console.log(data);

            // Eğitmenin hangi eğitim kategorisine ait olduğunu buluyoruz.
            const category = categoryNames.find((category) => category.id === instructor.category_id);


            // instructor ve fotoğrafların url'leri instructorsWithPhotoURL içine eklendi.
            // categoryName ile eğitmenlere ait bulunan kategoriler instructorsWithPhotoURL içine eklendi
            return { ...instructor, photoURL: data.publicUrl, categoryName: category ? category.name : '', urlName, englishUrlName };
        })

        return instructorsWithPhotoURL;
    }
    catch (error) {
        console.error('Eğitimen bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}

export async function getCourses() {
    try {
        const { data: Courses, error } = await supabase
            .from('Courses').select('*');

        console.log(Courses);

        if (error) {
            throw error;
        }

        //Çektiğimiz kategori id ve name'leri categoryNames içine atıyoruz
        const instructorNames = await getInstructorsName();

        const courseWithinstructorNames = await Promise.all(
            Courses.map(async (course) => {

                const englishUrlName = turkishToEnglish(course.course_name).toLowerCase().replace(/\s+/g, '-');
                //küçük harfe çevrildi ve boşluklara - koyuldu
                const photoURL =
                    `https://jxclitqaeokejtukmuof.supabase.co/storage/v1/object/public/courseCards/${englishUrlName}.jpg`;

                // Kursun hangi eğitmen tarafından yüklendiğini buluyoruz.
                const instructor = instructorNames.find((instructor) => instructor.id === course.created_by);

                return { ...course, photoURL, instructorName: instructor ? instructor.name : '' };
            })
        );

        return courseWithinstructorNames;
    }
    catch (error) {
        console.error('Kurs bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}

export async function getUserRoles(){
    try {
        const { data: UserRoles, error } = await supabase
            .from('UserRoles').select('*');

        // console.log(UserRoles);

        if (error) {
            throw error;
        }

        return UserRoles;
    }
    catch (error) {
        console.error('Kullanıcı rolleri alınırken hata oluştu:', error.message);
        return [];
    }
}

// Promise.all fonksiyonu, bir dizi asenkron işlemi paralel olarak çalıştırır ve tüm işlemler tamamlandığında bir promise döndürür. Bu, birden çok asenkron işlemi eşzamanlı olarak yürütmek ve tamamlandığında sonuçları almak için kullanışlıdır. Promise.all kullanmak, işlemleri seri olarak değil, eşzamanlı olarak çalıştırarak performansı artırabilir.



//TrainingCategories tablomuzdan id ve name'leri çekiyoruz
export async function getTrainingCategoriesName() {
    try {
        const { data: TrainingCategories, error } = await supabase
            .from('TrainingCategories').select('id, name');

        if (error) {
            throw error;
        }

        return TrainingCategories;
    } catch (error) {
        console.error('Eğitmen Kategorileri alınırken hata oluştu:', error.message);
        return [];
    }
}

//Instructors tablomuzdan id ve name'leri çekiyoruz
export async function getInstructorsName() {
    try {
        const { data: Instructors, error } = await supabase
            .from('Instructors').select('id, name');

        if (error) {
            throw error;
        }

        return Instructors;
    } catch (error) {
        console.error('Eğitmen bilgileri alınırken hata oluştu:', error.message);
        return [];
    }
}
