from rest_framework import serializers
from account.models import User, Profile, Kennel


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['avatar']


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'user', 'city', 'location']


class KennelSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'owner', 'name', 'animal', 'breed']