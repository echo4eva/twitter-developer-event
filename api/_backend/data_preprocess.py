import re
from sklearn.feature_extraction.text import TfidfVectorizer

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text

def preprocess_data(descriptions, tweet_texts):
    preprocessed_descriptions = [preprocess_text(text) for text in descriptions]
    preprocessed_tweet_texts = [preprocess_text(text) for text in tweet_texts]
    
    vectorizer = TfidfVectorizer()
    description_features = vectorizer.fit_transform(preprocessed_descriptions)
    tweet_features = vectorizer.transform(preprocessed_tweet_texts)
    features = description_features + tweet_features
    
    return features