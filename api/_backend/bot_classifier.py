from sklearn.svm import SVC

def train_model(features, labels):
    model = SVC(kernel="linear")
    model.fit(features, labels)
    return model

def predict_bot(model, description, tweet_text):
    preprocessed_description = preprocess_text(description)
    preprocessed_tweet_text = preprocess_text(tweet_text)
    
    vectorizer = TfidfVectorizer()
    description_features = vectorizer.transform([preprocessed_description])
    tweet_features = vectorizer.transform([preprocessed_tweet_text])
    features = description_features + tweet_features
    
    prediction = model.predict(features)
    return prediction[0]